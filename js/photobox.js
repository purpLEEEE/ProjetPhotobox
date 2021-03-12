import gallery from '/js/gallery.js'
import gallery_ui from '/js/gallery_ui.js'

/**
 *  Charge la gallerie et l'affiche sur la page
 * @param { String } uri chemin de la gallerie a afficher
 */
const getRessource = (uri) => {
  gallery.load(uri)
  .then(response => {
    gallery_ui.display_gallery(response)
  });
} 


/**
 * Affiche les ressources lors du clique sur le bouton de chargement de la gallerie
 */
document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    getRessource("/www/canals5/photobox/photos/?offset=0&size=10")
})
