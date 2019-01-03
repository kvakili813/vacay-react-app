import fetch from 'isomorphic-fetch'

// add comment
function addComment (id, author, comment) {
  return {
    type: 'ADD_COMMENT',
    id,
    author,
    comment
  }
}

// remove comment
function removeComment (id, i) {
    return {
      type: 'REMOVE_COMMENT',
      id,
      i
    }
  }
  
  // fetch places
  function fetchPlaces () {
    return (dispatch) => {
      dispatch({type: 'FETCH_PLACES'})
      return fetch('api/places')
  