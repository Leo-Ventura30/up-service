import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";
import Routes from "./pages/routes";

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Routes />
  </Fragment>
);

export default App;
