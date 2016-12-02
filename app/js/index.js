/**
 * Main app file.  Initializes app components.
 */
import { init as modelInit } from './model'
import { init as editorInit } from './editor'
import { init as routerInit } from './router'
import { init as viewInit } from './view'

/**
 * The main app object.
 *
 */
function vanillaPress () {
	modelInit()
	routerInit()
	viewInit()
	editorInit()
}


vanillaPress()