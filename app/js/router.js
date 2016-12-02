/**
 * Router file for managing url changes
 */
import { clearContent, loadBlogPosts, loadSingleContent } from './view'
import { editor, loadEditForm } from './editor'
import { getContent } from './model'
import { _getElement } from './helpers'

/**
 * Initializes the router
 *
 */
export function init () {
	loadContent()
	listenPageChange()
}


/**
 * Listener function for URL changes
 *
 */
function listenPageChange () {
	window.addEventListener('hashchange', loadContent)
}


/**
 * Gets the slug from the URL
 *
 */
export function getSlug () {
	const slug = window.location.hash.substring(1)
	return '' === slug ? null : slug
}



/**
 * Determines what view to load based on the slug
 */
function loadContent () {
	const slug = getSlug()
	const contentObj = getContent(slug)
	const editorEl = _getElement('#editor')

	clearContent()

	if (null === slug) {
		loadSingleContent('home')
	} else if ('blog' === slug) {
		loadBlogPosts()
	} else {
		loadSingleContent(slug)
	}

	editor.currentContent = contentObj

	if (false === editorEl.classList.contains('hidden')) {
		loadEditForm(editor.currentContent)
	}
}
