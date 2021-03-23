import lightbox from "./lightbox.js";

/**
 * recoit les donnees d'une image et affichage la lightbox de celle-ci
 * @param { Object } data donnees de l'image a afficher
 */
let display_lightbox = (data) => {
  let html = `
  <div id="lightbox">
      <div id="lightbox-head">
          <button id="fleche_gauche" type="button">Prev</button>
          <h1 id="lightbox_title">${data.photo.titre}</h1>
          <button id="fleche_droite" type="button">Next</button>
          <div id="lightbox_close">
            <p>X</p>
          </div>
      </div>

      <div id="lightbox-img">
          <img id="lightbox_full_img" src="https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/img/large/${data.photo.file}">
      </div>
      <div id="fleche_droite" class="fleche_droite">></div>

    <div id="lightbox-details">
        <div id="lightbox-commons-data">
          <h1> Picture Informations</h1>
          <h2> <strong> Picture Title :</strong> ${data.photo.titre}</h2>
          <p> <strong> Description :</strong>  ${data.photo.descr} </p>
          <p> <strong> File name :</strong>  ${data.photo.file} </p>
          <p> <strong> File size :</strong>  ${data.photo.size} </p>
          <p> <strong> File dimensions :</strong>  ${data.photo.width} x ${data.photo.height}  </p>
          <p> <strong> Picture url :</strong>  ${data.photo.url.href} </p>
        </div>
        <div id="lightbox-comments">
          <h1>Comments</h1>
          <div id="comments-list">
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
    <div id="comment-post">
      <h1> Post a comment </h1>
      <form id="post-form">
        <div class="form-group">
          <label for="pseudo"> Your name </label>
          <input type="text" name="pseudo" id="pseudo" placeholder="Example : SinGri5457">
        </div>

        <div class="form-group">
          <label for="titre"> Your comment title </label>
          <input type="text" name="titre" id="content" placeholder="Example : How this cat be so cut ?">
        </div>

        <div class="form-group">
          <label for="content"> Your comment content </label>
          <textarea id="content" name="content" placeholder="Example : I never saw this kind of cat before, it is so beautiful ...."> </textarea>
        </div>

        <button type="submit"> Post </button>
      </form>
    </div>
  `
  html += `   
      </div>
    </div>
  </div>
  `
  
  document.querySelector('#lightbox_container').innerHTML = html
  document.querySelector('#fleche_gauche').addEventListener('click', lightbox.prev)
  document.querySelector('#fleche_droite').addEventListener('click', lightbox.next)
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