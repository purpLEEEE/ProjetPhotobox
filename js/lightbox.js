import photoloader from './photoloader.js'
import lightbox_ui from './lightbox_ui.js'

/**
 * charge les donnees correspondant a l'image cliquee et affiche la lightbox associée
 * @param { HTMLElement } node 
 */
let load = (node) => {
  let uri = node.getAttribute("data-uri")
  let photo_data;
  let photo_comments;
  photoloader.loadResource(uri)
  .then(response => { // premiere reponse avec les donnees de la photo
    photo_data = response
    // on recupere les commentaires de cette photo grace a ces donnees recus
    return photoloader.loadResource(photo_data.links.comments.href)
  })
  .then(response => { 
    photo_comments = response
     // on fusionne les deux reponses pour envoyer l'ensemble des donnees de la photo a l'affichage
    photo_data = Object.assign(photo_data, photo_comments)
    lightbox_ui.display_lightbox(photo_data)
  })
}

export default {
  load
}