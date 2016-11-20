/**
 * Model file for working with data
 */
import jsonData from './data'

/**
 * Main Model Object
 *
 */
const model = {};


model.init = function() {
    model.updateLocalStore(jsonData);
};


/**
 * Gets posts from local store
 *
 * @return store {object} Object of posts
 */
model.getPosts = function() {
    return model.getLocalStore();
};


/**
 * Gets post from local store
 *
 * @param slug string
 * @return post {object} || null
 */
model.getPost = function(slug) {
    const posts = model.getLocalStore();
    return posts.find(post => post.slug === slug);
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
    localStorage.setItem( 'vanillaPress', store );
};


/**
 * Deletes data from local storage
 *
 */
model.removeLocalStore = function() {
    localStorage.removeItem( 'vanillaPress' );
};


export default model

