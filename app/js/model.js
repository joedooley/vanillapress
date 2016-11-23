/**
 * Model file for working with data
 */
import { data } from './data'

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
 * Gets content type from local store
 *
 * @param slug
 * @return store {object} Object of posts
 */
model.getSingle = function(slug) {
    const postTypes = model.getPosts().concat(model.getPages());
    return postTypes.find(postType => postType.slug === slug);
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

