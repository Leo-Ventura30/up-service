import React from "react";
import { Provider } from "react-redux";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { Footer } from "./components";
import store from "./store";
const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
    <Footer />
  </Provider>
);

export default App;
