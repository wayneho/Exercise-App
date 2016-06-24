require('es6-promise').polyfill()
require('isomorphic-fetch')

export default function getMuscles(cb){
  fetch('https://secret-falls-22349.herokuapp.com/muscles')
    .then(function(res){
      if(res.status >= 400){
        throw new Error("Bad response from server")
      }
      return res.json()
    })
    .then(function(muscleGroups){
      cb(muscleGroups)
    })
}
