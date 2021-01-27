import React, { Component, Fragment } from "react";
import Styled from "styled-components";
import Header from "../Header";
import Body from "../Body";
import api from "../../services/api";
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
