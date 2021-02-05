const INITIAL_STATE = {
  show: false,
};
export default function popup(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CLOSE_POPUP":
      console.log("fechou");
      return { ...state, show: false };
    case "OPEN_POPUP":
      console.log("abriu");
      return { ...state, show: true };
    default:
      return state;
  }
}
