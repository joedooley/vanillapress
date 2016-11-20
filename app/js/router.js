/**
 * Router file for managing url changes
 */
import view from './view'

/**
 * The main router object.
 *
 */
const router = {};


/**
 * Initializes the router
 *
 */
router.init = function () {
    router.loadContent();
    router.listenPageChange();
};


/**
 * Gets the slug from the URL
 *
 */
router.getSlug = function () {
    const slug = window.location.hash.substring(1);
    return '' === slug ? null : slug;
};


/**
 * Listener function for URL changes
 *
 */
router.listenPageChange = function () {
    window.addEventListener('hashChange', router.loadContent);
};


/**
 * Determines what view to load based on the slug
 */
router.loadContent = function () {
    const slug = router.getSlug();

    if (null === slug) {
        view.loadBlogPosts();
    } else {
        console.log('Page: ' + slug);
        view.clearContent();
    }
};


export default router