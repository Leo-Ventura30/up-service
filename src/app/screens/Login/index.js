import React, { Fragment } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
// import img from "../../../assets/barber.jpg";
import img2 from "../../assets/barber2.jpg";
import Styled from "styled-components";
import Signin from "./signin";
import Signout from "./signout";
import { ContentLogin, DivImage, ContainerLogin, ImageContent } from "./style";
// var imgs = [img, img2];
const LoginController = () => {
  const history = useHistory();

  return (
    <Fragment>
      {
        (localStorage.getItem("error") && localStorage.removeItem("token"),
        localStorage.removeItem("datas"),
        localStorage.removeItem("error"))
      }
      {localStorage.getItem("token") && history.push("/dashboard")}
      <ContentLogin>
        <DivImage>
          <ImageContent src={img2} alt="pic"></ImageContent>
        </DivImage>
        <ContainerLogin>
          <Switch>
            <Route exact path="/" component={() => <Signin />} />
            <Route path="/criar/conta" component={() => <Signout />} />
            <Route path="/esqueci/senha">config</Route>
          </Switch>
        </ContainerLogin>
      </ContentLogin>
    </Fragment>
  );
};

export default LoginController;
