/**
 * Main app file.  Initializes app components.
 */
import model from './model'
import router from './router'

/**
 * The main app object.
 *
 */
const vanillaPress = {
    run () {
        model.init();
        router.init();
    }
};

export default vanillaPress.run()
