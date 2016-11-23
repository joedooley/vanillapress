/**
 * Editor functions
 */
import helpers from './helpers'


/**
 * Main Model Object
 *
 */
const editor = {};


/**
 * Initializes the editor
 */
editor.init = function () {
    editor.toggleEditorEvent()
};


editor.toggleEditorHandler = function () {
    const editorEl = helpers.getEditorEls('editor');
    const editorToggleEl = helpers.getEditorEls('editorToggle');

    helpers.toggleClass(helpers.getEditorEls('editor'), 'hidden');
    helpers.toggleClass(helpers.getEditorEls('editorToggle'), 'hidden');
};


editor.toggleEditorEvent = function () {
    const editorToggleEl = helpers.getEditorEls('editorToggle');
    editorToggleEl.addEventListener('click', editor.toggleEditorHandler);
};


export default editor