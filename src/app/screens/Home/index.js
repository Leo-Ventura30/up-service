import React, { Component, Fragment } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header";
import Body from "../Body";
class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Body />
      </Fragment>
    );
  }
}
export default Home;
