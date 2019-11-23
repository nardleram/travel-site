import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'

let mobileMenu = new MobileMenu();

// Loads module for live ("hot") module replacement
if (module.hot) {
    module.hot.accept()
}