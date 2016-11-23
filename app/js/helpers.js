/**
 * Helper file for extra helper functions
 */

/**
 * Main Model Object
 *
 */
const helpers = {};


/**
 * Get page title
 */
helpers.getPageTitleEl = function() {
    return document.getElementById('pageTitle');
};


/**
 * Get page content
 */
helpers.getPageContentEl = function() {
    return document.getElementById('pageContent');
};


/**
 * Get Nav element
 */
helpers.getNavEl = function() {
    return document.querySelector('#mainNav ul');
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