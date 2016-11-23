/**
 * Editor functions
 */
import helpers from './helpers'
import model from './model'


/**
 * Main Model Object
 *
 */
const editor = {};


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
    helpers.toggleClass(editorEl, 'hidden');
    helpers.toggleClass(editorToggleEl, 'hidden');

    if (false === editorToggleEl.classList.contains('hidden')) {
        editor.getContent(model.getCurrentContent());
    }
};


/**
 * Listener for editor toggle
 */
editor.listenEditorToggle = function () {
    const editorToggleEl = helpers.getElement('editorToggle');
    editorToggleEl.addEventListener('click', editor.toggle);
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


export default editor