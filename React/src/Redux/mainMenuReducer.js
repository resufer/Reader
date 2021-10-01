let initialState = {
  some: null,
};

function mainMenuReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SOME":
      return {
        ...state,
        some: action.some
        }
    default:
      return state
  }
}

export default mainMenuReducer;
