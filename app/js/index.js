/**
 * Main app file.  Initializes app components.
 */
import model from './model'
import view from './view'

/**
 * The main app object.
 *
 */
const vanillaPress = {
    run () {
        model.init();
        view.init();
    }
};

export default vanillaPress.run()
