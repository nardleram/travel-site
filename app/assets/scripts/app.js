import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 92);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 80);
let stickyHeader = new StickyHeader()

// Loads module for live ("hot") module replacement
if (module.hot) {
    module.hot.accept()
}