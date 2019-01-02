function vacationComments (state = [], action) {
    switch (action.type) {
      case 'ADD_COMMENT':
        return [...state, {
          user: action.author,
          text: action.comment
        }]
      default:
        return state
    }
  }
  function comments (state = [], action) {
    if (typeof action.id !== 'undefined') {
      return {
        ...state,
        [action.id]: vacationComments(state[action.id], action)
      }
    }
    return state
  }
  
  export default comments