const INITIAL_STATE = {
  show: false,
};
export default function popup(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CLOSE_POPUP":
      return { ...state, show: false };
    case "OPEN_POPUP":
      return { ...state, show: true };
    default:
      return state;
  }
}
