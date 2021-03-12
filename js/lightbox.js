import photoloader from './photoloader.js'
import lightbox_ui from './lightbox_ui.js'

/**
 * charge les donnees correspondant a l'image cliquee et affiche la lightbox associée
 * @param { HTMLElement } node 
 */
let load = (node) => {
  let uri = node.getAttribute("data-uri")
  photoloader.loadResource(uri)
  .then(response => lightbox_ui.display_lightbox(response))
}

export default {
  load
}