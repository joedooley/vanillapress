/**
 * Main app file.  Initializes app components.
 */
import model from './model'
import router from './router'
import view from './view'
import editor from './editor'

/**
 * The main app object.
 *
 */
const vanillaPress = {
    run () {
        model.init();
        router.init();
        view.init();
        editor.init();
    }
};


export default vanillaPress.run()
