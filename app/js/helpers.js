/**
 * Helper file for extra helper functions
 */

/**
 * Main Model Object
 *
 */
const helpers = {};


/**
 * Get element by id
 */
helpers.getElement = function (element) {
    return document.getElementById(element);
};


/**
 * Get Nav element
 */
helpers.getNavEl = function() {
    return document.querySelector('#mainNav ul');
};


/**
 * Toggle css class
 */
helpers.toggleClass = function (element, cssClass) {
    element.classList.toggle(cssClass);
};


/**
 * Create menu items
 */
helpers.createMenuItem = function (contentObj) {
    const menuItemEl = document.createElement('li');
    menuItemEl.appendChild(helpers.createLink(contentObj));
    return menuItemEl;
};


/**
 * Create link item
 */
helpers.createLink = function (contentObj) {
    const linkEl = document.createElement('a');
    const linkTitle = document.createTextNode(contentObj.title);
    linkEl.appendChild(linkTitle);

    linkEl.href = '#' === contentObj.slug ? '#' : '#' + contentObj.slug;

    return linkEl;

};


export default helpers