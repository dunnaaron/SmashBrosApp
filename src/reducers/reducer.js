export const DEFAULT_STATE = {
  isMobileNavOpen: false
}

export default (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case 'SET_CURRENT_FIGHTER':
      return { ...state, selectedCurrentFighter: action.value };
    case 'TOGGLE_MOBILE_NAV':
      return { ...state, isMobileNavOpen: !state.isMobileNavOpen};
    default:
      return state;
  }
};