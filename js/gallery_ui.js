import lightbox from './lightbox.js'

let lightbox_courante = null;

/**
 * Ajoute et affiche le markup HTML de la galerie courante
 * @param { object } gallery 
 */
let display_gallery = (gallery) => {
  let gallery_container = document.querySelector('#gallery_container')
  gallery_container.innerHTML = ""
  gallery.photos.forEach(picture => {
    gallery_container.appendChild(display_picture(picture))
  });
}

/**
 * Construit le code HTMl d'une photo via le DOM et retourne l'element
 * @param { object } global_picture 
 */
let display_picture = (global_picture) => {
  let picture_content = `
    <img data-uri="${global_picture.links.self.href}"
    src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/small/${global_picture.photo.file}">
  `
  let picture_container = document.createElement('div')
  picture_container.innerHTML = picture_content
  picture_container.classList.add('vignette')
  picture_container.addEventListener('click', (e) => {
    lightbox_courante = picture_container
    lightbox.load(e.target)
  })
  return picture_container
}


/**
 * recupere la vignette courante
 */
let getLightboxCourante = () => {return lightbox_courante}


/**
 * change la vignette courante par celle donnee en parametre
 * @param { Element } vignette 
 */
let setLightboxCourante = (vignette) => {lightbox_courante = vignette}


export default {
  display_gallery,
  getLightboxCourante,
  setLightboxCourante
}