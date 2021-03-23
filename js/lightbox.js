import photoloader from './photoloader.js'
import lightbox_ui from './lightbox_ui.js'

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

export default {
  load,
  submit_comment
}