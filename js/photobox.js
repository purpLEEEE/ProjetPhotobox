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

/**
 * Ajoute le listener sur le bouton pour passer à la prochaine galerie
 */
document.querySelector('#next')
  .addEventListener('click', e => {
    if(gallery.galerieCharge()){
      gallery.next().then(response => {
        gallery_ui.display_gallery(response)
      })
    }
  })

/**
 * Ajoute le listener sur le bouton pour passer à la galerie précédente
 */
document.querySelector('#previous')
.addEventListener('click', e => {
  if(gallery.galerieCharge()){
    gallery.prev().then(response => {
      gallery_ui.display_gallery(response)
    })
  }
})

/**
 * Ajoute le listener sur le bouton pour passer à la première galerie
 */
document.querySelector('#first')
.addEventListener('click', e => {
  if(gallery.galerieCharge()){
    gallery.first().then(response => {
      gallery_ui.display_gallery(response)
    })
  }
})

/**
 * Ajoute le listener sur le bouton pour passer à la dernière galerie
 */
document.querySelector('#last')
.addEventListener('click', e => {
  if(gallery.galerieCharge()){
    gallery.last().then(response => {
      gallery_ui.display_gallery(response)
    })
  }
})