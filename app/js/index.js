/**
 * Main app file.  Initializes app components.
 */
import model from './model'
import router from './router'
import view from './view'

/**
 * The main app object.
 *
 */
const vanillaPress = {
    run () {
        model.init();
        router.init();
        view.init();
    }
};

export default vanillaPress.run()
