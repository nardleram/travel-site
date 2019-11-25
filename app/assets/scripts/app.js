import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'


new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 92);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 80);
new StickyHeader()
let modal

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
                modal = new x.default()
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(() => {
                console.log("There was a problem loading the modal function.")
            })
        } else {
            modal.openTheModal()
        }
    })
})

// Loads module for live ("hot") module replacement
if (module.hot) {
    module.hot.accept()
}