import { applyMiddleware, createStore, compose } from "redux";
import reducers from "./reducers";
const composer =
  process.env.NODE_ENV === "development"
    ? compose(applyMiddleware(...[]))
    : applyMiddleware(...[]);
const store = createStore(reducers, composer);

export default store;
