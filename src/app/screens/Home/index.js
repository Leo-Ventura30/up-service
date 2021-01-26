import React, { Component, Fragment } from "react";
import Styled from "styled-components";
import Header from "../Header";
import Body from "../Body";
import api from "../../services/api";
class Home extends Component {
  handleGetAppoitments = async () => {
    console.log(this.state);
    // const response = await api.get("/dashboard/appointments", {
    //   headers: {
    //     "x-access-token": localStorage.getItem("token"),
    //   },
    // });
  };
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
