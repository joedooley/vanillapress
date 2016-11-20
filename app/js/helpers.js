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


export default helpers