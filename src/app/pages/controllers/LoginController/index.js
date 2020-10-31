import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import img from "../../../assets/barber.jpg";
import img2 from "../../../assets/barber2.jpg";
import Styled from "styled-components";
import Signin from "./signin";
import Signout from "./signout";

var imgs = [img, img2];

const Content = Styled.div`
  width:100%;
  max-height:max-content;
  background:linear-gradient(to bottom right ,rgba(0,105,245,0.3),rgba(0,0,0,0.9));
`;
const Container = Styled.div`
  width:100%;
  min-height>max-content;
  height:110vh;
`;
const Image = Styled.img`
  max-height:max-content;
  height:110vh;
  width:60%;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
  opacity:0.6;
`;
const Imageout = Styled.img`
  float:right;
  max-height:max-content;
  height:110vh;
  width:60%;
  clip-path:polygon(30% 0, 100% 0%, 100% 100%, 0 100%);
  opacity:0.6;
`;
const Fot = Styled.footer`
  max-height:max-content;
  font-family:roboto;
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:3%;
  background:rgba(0,0,0,1);
`;

const LoginController = () => {
  return (
    <Fragment>
      <Content>
        <Container>
          <Switch>
            <Route exact path="/">
              <title>Login | Up Barber</title>
              <Image src={imgs[0]} />
              <Signin />
            </Route>
            <Route path="/criar/conta">
              <title>Cadastro | Up Barber</title>
              <Imageout src={imgs[1]} />
              <Signout />
            </Route>
            <Route path="/esqueci/senha">config</Route>
          </Switch>
        </Container>
      </Content>
      <Fot>
        Copyright 2020-2020 by Up comercial softwares. All Rights Reserved.
      </Fot>
    </Fragment>
  );
};

export default LoginController;
