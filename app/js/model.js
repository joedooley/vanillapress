/**
 * Model file for working with data
 */
import { data } from './data'
import router from './router'

/**
 * Main Model Object
 *
 */
const model = {};


model.init = function() {
    model.updateLocalStore(data);
};


/**
 * Gets posts from local store
 *
 * @return store {array} Object of posts
 */
model.getPosts = function() {
    return model.getLocalStore().posts;
};


/**
 * Gets pages from local store
 *
 * @return store {array} Object of posts
 */
model.getPages = function() {
    return model.getLocalStore().pages;
};


/**
 * Gets single post or page from local store
 *
 * @param slug
 * @return store {object} Object of posts
 */
model.getSingle = function(slug) {
    const postTypes = model.getPosts().concat(model.getPages());
    return postTypes.find(postType => postType.slug === slug);
};


/**
 * Get a single post or page based on the url
 */
model.getCurrentContent = function () {
    const slug = router.getSlug();
    return model.getSingle(slug);
};


/**
 * Updates post or page in local store
 *
 * @param {object} contentObj
 */
model.updateContent = function (contentObj) {
    let store = model.getLocalStore();
    let date = new Date();

    if ('post' === contentObj.type) {
        store.posts.forEach(function (post) {
            if (contentObj.id === post.id) {
                post.title = contentObj.title;
                post.content = contentObj.content;
                post.modified = date.toISOString();
            }
        });
    }

    if ('page' === contentObj.type) {
        store.pages.forEach(function (page) {
            if (contentObj.id === page.id) {
                page.title = contentObj.title;
                page.content = contentObj.content;
                page.modified = date.toISOString();
            }
        });
    }

    model.updateLocalStore(store);
};


/**
 * Gets content from local store
 *
 * @return store {object} Native JavaScript object from local store
 */
model.getLocalStore = function() {
    return JSON.parse( localStorage.getItem( 'vanillaPress' ) );
};


/**
 * Saves temporary store to local storage.
 *
 * @param store {object} Native JavaScript object with site data
 */
model.updateLocalStore = function( store ) {
    localStorage.setItem( 'vanillaPress', JSON.stringify(store) );
};


/**
 * Deletes data from local storage
 *
 */
model.removeLocalStore = function() {
    localStorage.removeItem( 'vanillaPress' );
};


export default model

