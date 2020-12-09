import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
// import img from "../../../assets/barber.jpg";
import img2 from "../../../assets/barber2.jpg";
import Styled from "styled-components";
import Signin from "./signin";
import Signout from "./signout";

// var imgs = [img, img2];

const Content = Styled.div`
  *{
    font-family:roboto;
  }
  min-height:45vw;
  max-height:max-content;
  width:100%;
  background:linear-gradient(to bottom right ,rgba(0,105,245,0.3),rgba(0,0,0,0.9));
`;

const DivImage = Styled.div`
  position:absolute;
  width:100%;
`;
const ContainerLogin = Styled.div`
  border-radius: 5% 0 0 5%;
  border-left:3px solid #1223;
  padding:3%;
  width:40%;
  min-height:97vh;
  max-height:max-content;
  background:rgba(0,0,0,0.5);
  transform:translateX(150%);
  display:flex;
  align-items:center;
  justify-content:center;
  @media screen and (max-width:768px) {
    &{
      border-radius:0%;
      width:100%;
      transform:translateX(0%);
    }
  }
  @media screen and (max-width:1000px) {
    &{
      border-radius:0%;
      width:100%;
      transform:translateX(0%);
    }
  }
  
`;

const Fot = Styled.footer`
  margin-top:2px;
  position:relative;
  max-height:max-content;
  height:20%;
  font-family:roboto;
  font-size:1.4vw;
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:3%;
  background:rgba(0,0,0,1);
  @media screen and (max-width:768px) {
    &{
      font-size:2.5vw;
    }
  }
`;
const ImageContent = Styled.img`
  width:100%;
  height:110vh;
  opacity:0.4;

  @media screen and (max-width:1000px){
    height:0vh;
    width:0%;
    opacity:0;
  }
  
`;
const LoginController = () => {
  return (
    <Fragment>
      <Content>
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
      </Content>
      <Fot>Copyright © 2020 by Up digital services. All Rights Reserved.</Fot>
    </Fragment>
  );
};

export default LoginController;
