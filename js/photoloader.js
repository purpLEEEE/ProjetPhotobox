import config from './config.js'

/**
 * envoit une requete a l'API pour recuperer la liste de photos
 * @param { Number } offset numero d'image a partir de laquelle la requete charge les photos
 * @param { Number } size nombre d'images que la requete doit charger
 */
let loadResource = (offset, size) => {
  return fetch(`${config.photobox_url}photos/?offset=${offset}&size=${size}`, { credentials: config.credentials })
  .then(response => {
      if(response.ok) return response.json()
      else console.log('Erreur de réponse : ' + response.status )
  })
  .catch(err => {
      console.log('Une erreur est survenue : ' + err.status)
  })
}

export default {
  loadResource
}