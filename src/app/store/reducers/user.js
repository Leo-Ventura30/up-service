INITIAL_STATE = {
  error: false,
  text: "",
};
const userReducer = (state, action) => {
  switch (action.type) {
    case "USER_SUCCESS":
      return { ...state, error: action.type };
    case "USER_ERROR":
      return { ...state, error: action.type };
    default:
      return state;
  }
};

export default userReducer;
