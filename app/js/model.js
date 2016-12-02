/**
 * Model file for working with data
 */
import { data } from './data'
import { getSlug } from './router'


export function init () {
	if (false === checkLocalStore()) {
		updateLocalStore(data)
	}
}


/**
 * Gets posts from local store
 *
 * @return store {array} Object of posts
 */
export function getPosts () {
	return getLocalStore().posts
}


/**
 * Get a single post based on url slug
 *
 * @param {string} slug The slug for the post
 * @return {Object} post Single post
 *
 */
function getPost ( slug ) {
	let posts = getLocalStore().posts

	for( let i = 0, max = posts.length; i < max; i++  ) {
		if( slug === posts[i].slug ) {
			return posts[i]
		}
	}
	return null
}


/**
 * Gets pages from local store
 *
 * @return store {array} Object of posts
 */
export function getPages () {
	return getLocalStore().pages
}


/**
 * Get a single page based on url slug
 *
 * @param {string} slug The slug for the post
 * @return {Object} post Single post
 *
 */
function getPage ( slug ) {
	let pages = getLocalStore().pages

	for( let i = 0, max = pages.length; i < max; i++  ) {
		if( slug === pages[i].slug ) {
			return pages[i]
		}
	}
	return null
}


/**
 * Gets single post or page from local store
 *
 * @param slug
 * @return store {object} Object of posts
 */
export function getContent (slug) {
	// const postTypes = getPosts().concat(getPages())
	// return postTypes.find(postType => postType.slug === slug)

	let contentObj = getPost(slug)

	if (null === contentObj)
		contentObj = getPage(slug)

	if (null === contentObj) {
		contentObj = {
			title: '404 Error',
			content: 'Content not found'
		}
	}
	return contentObj
}


/**
 * Get a single post or page based on the url
 */
export function getCurrentContent () {
	let slug = getSlug()

	if ( null === slug)
		slug = 'home'

	return getContent(slug)
}


/**
 * Updates post or page in local store
 *
 * @param {object} contentObj
 */
export function updateContent (contentObj) {
	const store = getLocalStore()
	const date = new Date()

	if ('post' === contentObj.type) {
		store.posts.forEach(function (post) {
			if (contentObj.id === post.id) {
				post.title = contentObj.title
				post.content = contentObj.content
				post.modified = date.toISOString()
			}
		})
	}

	if ('page' === contentObj.type) {
		store.pages.forEach(function (page) {
			if (contentObj.id === page.id) {
				page.title = contentObj.title
				page.content = contentObj.content
				page.modified = date.toISOString()
			}
		})
	}

	updateLocalStore(store)
}


/**
 * Updates if editor is hidden
 *
 * @param isHidden bool If editor is hidden or not
 */
export function updateEditorHidden (isHidden) {
	let store = getLocalStore()
	store.settings.editorHidden = isHidden
	updateLocalStore(store)
}


/**
 * Gets local store setting for if editor is hidden
 *
 * @return {Boolean} hidden A boolean for if editor is hidden
 */
export function getEditorHidden () {
	let store = getLocalStore()
	return store.settings.editorHidden
}


/**
 * Checks if local store already exists
 *
 * @return {Boolean} Boolean value for if local store already exists
 */
function checkLocalStore () {
	let store = getLocalStore()
	return null !== store;
}


/**
 * Gets content from local store
 *
 * @return store {object} Native JavaScript object from local store
 */
function getLocalStore () {
	return JSON.parse(localStorage.getItem('vanillaPress'))
}


/**
 * Saves temporary store to local storage.
 *
 * @param store {object} Native JavaScript object with site data
 */
function updateLocalStore (store) {
	localStorage.setItem('vanillaPress', JSON.stringify(store))
}


/**
 * Deletes data from local storage
 *
 */
export function removeLocalStore () {
	localStorage.removeItem('vanillaPress')
}
