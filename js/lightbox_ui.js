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

    <div id="lightbox-details">
        <h1> Picture Informations</h1>
        <h2> <strong> Picture Title :</strong> ${data.photo.titre}</h2>
        <p> <strong> Description :</strong>  ${data.photo.descr} </p>
        <p> <strong> File name :</strong>  ${data.photo.file} </p>
        <p> <strong> File size :</strong>  ${data.photo.size} </p>
        <p> <strong> File dimensions :</strong>  ${data.photo.width} x ${data.photo.height}  </p>
        <p> <strong> Picture url :</strong>  ${data.photo.url.href} </p>

        <div id="lightbox-comments">
          <h2> <strong> Comments :</strong></h2>

  `

  data.comments.forEach(comment => {
    html += `
      <div class="comment">
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
      </div> 
    `
  });

  html += `   
      </div>
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