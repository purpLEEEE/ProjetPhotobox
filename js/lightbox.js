import photoloader from './photoloader.js'
import lightbox_ui from './lightbox_ui.js'
import gallery from './gallery.js'
import gallery_ui from './gallery_ui.js';

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

  photoloader.postResource(e, current_image_data.links.comments.href)
  .then(response => { // ajout du commentaire dans le DOM
    let comment = response.comment
    let comment_html = `
      <div id="comment-header">
        <img src="/img/user.svg">
        <div>
          <p><strong>${comment.pseudo}</strong> </p>
          <p> ${comment.titre} </p>
          <p id="date">posted the ${comment.date} </p>
        </div>
      </div>
      <div id="comment-content">
        <p> ${comment.content} </p>
      </div>
    `
    let comment_element = document.createElement('div')
    comment_element.setAttribute('class', 'comment')
    comment_element.innerHTML = comment_html

    document.querySelector('#comments-list').prepend(comment_element)
    alert('Commentaire posté.')
  })

  return false
}

/**
 * Permet de passer à la lightbox suivante
 * Si pas de lightbox suivante on passe à la première de la page suivante
 */
let next = async () => {
  let vignetteSuivante = gallery_ui.getVignetteCourante().nextElementSibling
  if(vignetteSuivante === null){
    await gallery.next().then(gallery_ui.display_gallery)
    vignetteSuivante = document.querySelector('#gallery_container').firstElementChild
  }
  gallery_ui.setVignetteCourante(vignetteSuivante)
  return load(vignetteSuivante.firstElementChild)
}

/**
 * Permet de passer à la lightbox précédente
 * Si pas de lightbox précédente on passe à la dernière de la page précédente
 */
let prev = async () => {
  let vignettePrecedente = gallery_ui.getVignetteCourante().previousElementSibling
  if(vignettePrecedente === null){
    await gallery.prev().then(gallery_ui.display_gallery)
    vignettePrecedente = document.querySelector('#gallery_container').lastElementChild
  }
  gallery_ui.setVignetteCourante(vignettePrecedente)
  return load(vignettePrecedente.firstElementChild)
}

export default {
  load,
  submit_comment,
  next,
  prev
}