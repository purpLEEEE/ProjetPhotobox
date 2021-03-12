import lightbox from './lightbox.js'

/**
 * Ajoute et affiche le markup HTML de la galerie courante
 * @param { object } gallery 
 */
let display_gallery = (gallery) => {
  let gallery_container = document.querySelector('#gallery_container')
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
  picture_container.addEventListener('click', (e) => lightbox.load(e.target))
  return picture_container
}

export default {
  display_gallery
}