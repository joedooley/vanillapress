/**
 * View file for displaying content
 */
import { getPosts, getContent, getPages } from './model'
import { _getElement, _createMenuItem } from './helpers'


/**
 * Calls initial View methods
 */
export function init() {
	loadMainMenu()
}


/**
 * Gets blog posts and appends them to the page.
 */
export function loadBlogPosts() {
	let posts = getPosts()
	let postsMarkup = document.createDocumentFragment()
	let titleEl = _getElement('#pageTitle')
	let contentEl = _getElement('#pageContent')


	for ( let i = 0, max = posts.length; i < max; i++) {
		postsMarkup.appendChild(createPostMarkup(posts[i]))
	}

	titleEl.innerHTML = 'Blog Posts'
	contentEl.appendChild(postsMarkup)
}


/**
 * Loads Main Menu from pages
 *
 * @param slug string
 */
export function loadSingleContent (slug) {
	let contentObj = getContent(slug)
	const titleEL = _getElement('#pageTitle')
	const contentEl = _getElement('#pageContent')

	titleEL.innerHTML = contentObj.title
	contentEl.innerHTML = contentObj.content
}


/**
 * Updates title in real time when content changes
 */
export function updateTitleAndContent (contentObj) {
	updateTitle(contentObj.title)
	updateContent(contentObj.content)
}


/**
 * Updates title in real time when content changes
 *
 * @param title string
 */
export function updateTitle (title) {
	let titleEl = _getElement('#pageTitle')
	titleEl.innerHTML = title
}


/**
 *  Updates content in real time when content changes
 *
 * @param content string
 */
export function updateContent (content) {
	let contentEl = _getElement('#pageContent')
	contentEl.innerHTML = content
}


/**
 * Clears title and main content from page
 */
export function clearContent () {
	const titleEL = _getElement('#pageTitle')
	const contentEl = _getElement('#pageContent')

	titleEL.innerHTML = ''
	contentEl.innerHTML = ''
}


/**
 * Load primary navigation
 */
function loadMainMenu () {
	const pages = getPages()
	const mainMenuEl = _getElement('#mainNav ul')
	const mainMenuMarkup = document.createDocumentFragment()

	for (let i = 0; i < pages.length; i++) {
		mainMenuMarkup.appendChild(_createMenuItem(pages[i]))
	}

	mainMenuEl.appendChild(mainMenuMarkup)
}


/**
 * Creates Markup for Blog Posts
 *
 * @return object {articleEl} Final post markup
 * @param post
 */

function createPostMarkup (post) {

	const articleEl = document.createElement('article'),
		titleEl = document.createElement('h3'),
		titleLink = document.createElement('a'),
		titleText = document.createTextNode(post.title),
		contentEl = document.createElement('div')

	titleLink.appendChild(titleText)
	titleLink.href = '#' + post.slug
	titleEl.appendChild(titleLink)

	contentEl.appendChild(document.createTextNode(post.content))

	articleEl.appendChild(titleEl)
	articleEl.appendChild(contentEl)

	return articleEl

}
