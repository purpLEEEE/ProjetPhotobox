let display_lightbox = (data) => {
  console.log(data)
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
  show(html)
  document.querySelector('#lightbox_close').addEventListener('click', hide)
} 

let show = (html) => {
  document.querySelector('#lightbox_container').innerHTML = html
}


let hide = () => {
  document.querySelector('#lightbox_container').innerHTML = ""
}
export default {
  display_lightbox
}