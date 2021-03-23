import config from './config.js'

/**
 * envoit une requete a l'API pour recuperer la ressource souhaitee
 * @param { String } uri chemin de la ressource a charger
 */
let loadResource = (uri) => {
  return fetch(config.photobox_url + uri, { credentials: config.credentials })
  .then(response => {
      if(response.ok) return response.json()
      else console.log('Erreur de réponse : ' + response.status)
  })
  .catch(err => {
      console.log('Impossible de charger la ressource : ' + err.status)
  })
}

/**
 * envoit une requete a l'API pour poster la ressource souhaitee
 * @param { Event } e event 
 * @param { String } uri chemin de la ressource a poster 
 */
let postResource = (e, uri) => {
  return fetch(config.photobox_url + uri, {
    method: 'POST',
    body: new FormData(e.target)
  })
  .then(response => {
    if(response.ok) return response.json()
    else console.log('Erreur de réponse : ' + response.status)
  })
  .catch(err => {
    console.log('Impossible d\'envoyer la ressource : ' + err.status)
  })
}

export default {
  loadResource,
  postResource
}