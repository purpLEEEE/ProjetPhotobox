/**
 * recoit les donnees d'une image et affichage la lightbox de celle-ci
 * @param { Object } data donnees de l'image a afficher
 */
let display_lightbox = (data) => {
  let html = `
  <div id="lightbox">
    <div id="lightbox-head">
        <h1 id="lightbox_title">${data.photo.titre}</h1>
        <div id="lightbox_close">
          <p>X</p>
        </div>
    </div>

    <div id="lightbox-img">
        <img id="lightbox_full_img" src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/large/${data.photo.file}">
    </div>
  </div>
  `
  document.querySelector('#lightbox_container').innerHTML = html
  show()
  document.querySelector('#lightbox_close').addEventListener('click', hide)
} 

/**
 * rend visible la lightbox
 */
let show = () => {
  document.querySelector('#lightbox_container').classList.remove('lightbox_container--hidden')
  document.querySelector('#lightbox_container').classList.add('lightbox_container--visible')
}

/**
 * rend invisible la lightbox
 */
let hide = () => {
  document.querySelector('#lightbox_container').classList.remove('lightbox_container--visible')
  document.querySelector('#lightbox_container').classList.add('lightbox_container--hidden')
}

export default {
  display_lightbox
}