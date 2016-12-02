/**
 * Helper file for extra helper functions
 */


/**
 * Create menu items
 *
 * @param contentObj
 * @return Object menuItemEl
 */
export function _createMenuItem (contentObj) {
	const menuItemEl = document.createElement('li')
	menuItemEl.appendChild(_createLink(contentObj))
	return menuItemEl
}


/**
 * Create link item
 *
 * @param contentObj
 * @return linkEl Object
 */
export function _createLink (contentObj) {
	const linkEl = document.createElement('a')
	const linkTitle = document.createTextNode(contentObj.title)
	linkEl.appendChild(linkTitle)

	linkEl.href = '#' === contentObj.slug ? '#' : '#' + contentObj.slug

	return linkEl

}

/**
 * Toggle css class
 *
 * @param element
 * @param cssClass
 */
export function _toggleClass (element, cssClass) {
	element.classList.toggle(cssClass)
}



/**
 * Gets all links
 * @return object all link elements
 */
export function _getLinks () {
	return document.querySelectorAll( 'a' );
}


/**
 * Get element by id
 *
 * @param element
 * @return string
 */
export function _getElement (element) {
	return document.querySelector(element)
}
