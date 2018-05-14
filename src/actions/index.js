export const UPDATE = 'UPDATE';

export const updateText = (text) => {
	return {
  type : 'UPDATE',
  text: text
}
};

const appStates = (state = {text: "Gurpreet"}, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        text: action.text
      }
    default:
      return state
  }
}

export default appStates
