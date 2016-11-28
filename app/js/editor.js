/**
 * Editor functions
 */
import helpers from './helpers'
import model from './model'
import view from './view'

/**
 * Main Model Object
 *
 */
const editor = {};

/**
 * Property for updating local storage with new editor content
 * @type {string}
 */
editor.currentContent = '';


/**
 * Initializes the editor
 */
editor.init = function () {
    editor.listenEditorToggle();
};


/**
 * Toggle hidden class from editor and editor toggle element
 */
editor.toggle = function (event) {
    const editorEl = helpers.getElement('editor');
    const editorToggleEl = helpers.getElement('editorToggle');
    event.preventDefault();

    editor.currentContent = model.getCurrentContent();

    helpers.toggleClass(editorEl, 'hidden');
    helpers.toggleClass(editorToggleEl, 'hidden');

    if (false === editorToggleEl.classList.contains('hidden')) {
        editor.getContent(editor.currentContent);
    }

    editor.addFormListeners();
};


/**
 * Listener for editor toggle
 */
editor.listenEditorToggle = function () {
    const editorToggleEl = helpers.getElement('editorToggle');
    editorToggleEl.addEventListener('click', editor.toggle);
};


/**
 * Adds event listeners to form elements
 */
editor.addFormListeners = function () {
    const titleInputEl = helpers.getElement('editTitle');
    const contentInputEl = helpers.getElement('editContent');
    const updateBtnEl = helpers.getElement('editUpdateBtn');

    titleInputEl.addEventListener('input', view.updateTitleFromForm);
    contentInputEl.addEventListener('input', view.updateContentFromForm);
    updateBtnEl.addEventListener('click', editor.updateContent);
};


/**
 * Set the value of content area equal to editor textarea
 *
 * @param {object} contentObj
 */
editor.getContent = function (contentObj) {
    const titleInputEl = helpers.getElement('editTitle');
    const contentInputEl = helpers.getElement('editContent');

    titleInputEl.value = contentObj.title;
    contentInputEl.value = contentObj.content;
};


/**
 * Add updated content to local storage
 */
editor.updateContent = function () {
    model.updateContent(editor.currentContent)
};


export default editor