/**
 * Editor functions
 */
import { _getElement, _toggleClass, _getLinks } from './helpers'
import { getCurrentContent as ModelgetCurrentContent, updateContent as ModelupdateContent, updateEditorHidden, getEditorHidden } from './model'
import { updateTitle as ViewupdateTitle, updateContent as ViewupdateContent } from './view'


export let editor = {}

editor.currentContent = ''
editor.unSavedContent = false

/**
 * Initializes the editor
 */
export function init () {
	listenEditorToggle()
	checkEditorHidden()
}


/**
 * Add updated content to local storage
 */
function updateContent () {
	event.preventDefault()
	ModelupdateContent(editor.currentContent)
	editor.unSavedContent = false
	animateSaveBtn()
}


/**
 * Update the title when changed in editor
 *
 */
function updateTitle () {
	const title = _getElement('#editTitle').value

	editor.currentContent.title = title
	editor.unSavedContent = true

	ViewupdateTitle(title)
}


/**
 * Updates local storage for post or page
 *
 */
function updateMainContent () {
	const content = _getElement('#editContent').value

	editor.currentContent.content = content
	editor.unSavedContent = true

	ViewupdateContent(content)
}


/**
 * Set the value of content area equal to editor textarea
 *
 * @param {object} contentObj
 */
export function loadEditForm (contentObj) {
	let titleForm = _getElement('#editTitle')
	let contentForm = _getElement('#editContent')

	titleForm.value = contentObj.title
	contentForm.value = contentObj.content

	if ('blog' === contentObj.slug) {
		contentForm.setAttribute('readonly', 'readonly')
	} else {
		contentForm.removeAttribute('readonly', 'readonly')
	}

	addFormListeners()
}


/**
 * Animates the Update button showing the user something
 * that something is happening
 */
function animateSaveBtn () {
	let btn = _getElement('#editUpdateBtn')

	const saved = function () {
		setTimeout(function () {
			btn.innerText = 'Update'
		}, 1000)
	}
	
	const saving = function () {
		setTimeout(function () {
			btn.innerText = 'Saved!'
			saved()
		}, 900)
	}

	btn.innerText = 'Saving...'
	saving()
}


/**
 * Adds event listeners to form elements
 */
function addFormListeners () {
	const titleForm = _getElement('#editTitle')
	const contentForm = _getElement('#editContent')
	const updateBtn = _getElement('#editUpdateBtn')
	let links = _getLinks()

	titleForm.addEventListener(
		'input',
		updateTitle,
		false
	)

	contentForm.addEventListener(
		'input',
		updateMainContent,
		false
	)

	updateBtn.addEventListener(
		'click',
		updateContent,
		false
	)

	links.forEach(function (link) {
		link.addEventListener(
			'click',
			protectUnsavedContent,
			false
		)
	})
}


/**
 * Adds alert if links are clicked with unsaved content
 *
 */
function protectUnsavedContent () {
	if (true === editor.unSavedContent) {
		let confirm = window.confirm('You have unsaved content')

		if (false === confirm) {
			event.preventDefault()
		} else {
			editor.unSavedContent = false
		}
	}
}


/**
 * Listener for editor toggle
 */
function listenEditorToggle() {
	let toggleEl = _getElement('#editorToggle a')

	toggleEl.addEventListener('click', function () {
		toggle()
		event.preventDefault()
	}, false
	)
}


/**
 * Opens editor if local store has editor visible
 *
 */
function checkEditorHidden () {
	let isHidden = getEditorHidden()
	if ( false === isHidden) {
		toggle()
	}
}


/**
 * Toggle hidden class from editor and editor toggle element
 */
function toggle () {
	const editorEl = _getElement('#editor')
	const toggleEl = _getElement('#editorToggle')
	let links = _getLinks()

	editor.currentContent = ModelgetCurrentContent()

	_toggleClass(editorEl, 'hidden')
	_toggleClass(toggleEl, 'hidden')

	if (false === toggleEl.classList.contains('hidden')) {
		loadEditForm(editor.currentContent)
		updateEditorHidden(false)
	} else {
		updateEditorHidden(true)

		links.forEach(function (link) {
			link.removeEventListener(
				'click',
				protectUnsavedContent,
				false
			)
		})
	}
}
