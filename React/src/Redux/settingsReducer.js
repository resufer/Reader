let initialState = {
  fontSize: '14px',
};

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SIZE":
      return {
        ...state,
        fontSize: action.fontSize
        }
    default:
      return state
  }
}

export default settingsReducer;
