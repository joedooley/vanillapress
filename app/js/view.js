/**
 * View file for displaying content
 */
import model from './model'
import helpers from './helpers'


/**
 * Main view object
 *
 */
const view = {};


/**
 * Calls initial View methods
 */
view.init = function() {
    view.loadMainMenu();
};


/**
 * Gets blog posts and appends them to the page.
 */
view.loadBlogPosts = function() {
    let posts = model.getPosts();
    let postsMarkup = document.createDocumentFragment();
    let primaryContentEl = helpers.getPageContentEl();


    for ( let i = 0, max = posts.length; i < max; i++) {
        postsMarkup.appendChild(view.createPostMarkup(posts[i]));
    }

    primaryContentEl.appendChild(postsMarkup);
};


/**
 * Loads Main Menu from pages
 *
 * @param slug string
 */
view.loadSingle = function (slug) {
    let postType = model.getSingle(slug);
    const titleEL = helpers.getPageTitleEl();
    const contentEl = helpers.getPageContentEl();

    if (undefined === postType) {
        postType = {
            title: 'Page not found',
            content: `You must be lost. <a href='#'>Click here</a> to go back to the site.`
        };
    }

    titleEL.innerHTML = postType.title;
    contentEl.innerHTML = postType.content;
};


/**
 * Load primary navigation
 */
view.loadMainMenu = function () {
    const pages = model.getPages();
    const mainMenuEl = helpers.getNavEl();
    const mainMenuMarkup = document.createDocumentFragment();

    for (let i = 0; i < pages.length; i++) {
        mainMenuMarkup.appendChild(helpers.createMenuItem(pages[i]));
    }

    mainMenuEl.appendChild(mainMenuMarkup);
};


/**
 * Creates Markup for Blog Posts
 *
 * @return object {articleEl} Final post markup
 * @param post
 */

view.createPostMarkup = function (post) {

    const articleEl = document.createElement('article'),
        titleEl = document.createElement('h3'),
        titleLink = document.createElement('a'),
        titleText = document.createTextNode(post.title),
        contentEl = document.createElement('div');

    titleLink.appendChild(titleText);
    titleLink.href = '#' + post.slug;
    titleEl.appendChild(titleLink);

    contentEl.appendChild(document.createTextNode(post.content));

    articleEl.appendChild(titleEl);
    articleEl.appendChild(contentEl);

    return articleEl;

};


/**
 * Clears title and main content from page
 */
view.clearContent = function () {
    const titleEL = helpers.getPageTitleEl();
    const contentEl = helpers.getPageContentEl();

    titleEL.innerHTML = '';
    contentEl.innerHTML = '';
};

export default view