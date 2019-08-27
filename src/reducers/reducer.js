export const DEFAULT_STATE = {
  helloWorld: 'initial state'
}

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case 'SET_CURRENT_FIGHTER':
      return { ...state, selectedCurrentFighter: action.value };
      // return Object.assign({}, state, { selectedCurrentFighter: action.value })
    default:
      return state;
  }
};