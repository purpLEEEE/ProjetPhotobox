import photoloader from './photoloader.js'
import lightbox_ui from './lightbox_ui.js'
import config from './config.js'

/**
 * donnees de l'image visualisee dans la lightbox
 */
var current_image_data = null;

/**
 * charge les donnees correspondant a l'image cliquee et affiche la lightbox associée
 * @param { HTMLElement } node 
 */
let load = (node) => {
  let uri = node.getAttribute("data-uri")
  let photo_comments;
  photoloader.loadResource(uri)
  .then(response => { // premiere reponse avec les donnees de la photo
    current_image_data = response
    // on recupere les commentaires de cette photo grace a ces donnees recus
    return photoloader.loadResource(current_image_data.links.comments.href)
  })
  .then(response => { 
    photo_comments = response
     // on fusionne les deux reponses pour envoyer l'ensemble des donnees de la photo a l'affichage
     current_image_data = Object.assign(current_image_data, photo_comments)
    lightbox_ui.display_lightbox(current_image_data)
    document.querySelector('#post-form').addEventListener('submit', (e) => submit_comment(e))
  })
}

/**
 * poste un commentaire 
 * @param { Object } e 
 */
export let submit_comment = (e) => {
  e.preventDefault()
  fetch (config.photobox_url + current_image_data.links.comments.href, {
    method: 'POST',
    body: new FormData(e.target)
  })
  .then(() => alert("Votre commentaire a bien été posté. Rechargez la page pour le voir apparaître."))
  return false
}

export default {
  load,
  submit_comment
}