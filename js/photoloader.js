import config from './config.js'

/**
 * envoit une requete a l'API pour recuperer la ressource souhaitee
 * @param { String } uri chemin de la ressource a charger
 */
let loadResource = (uri) => {
  return fetch(`${config.photobox_url + uri}`, { credentials: config.credentials })
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