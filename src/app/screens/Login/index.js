import React, { Fragment } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Styled from "styled-components";
import Signin from "./signin";
import Signout from "./signup";
import { ContentLogin, DivImage, ContainerLogin, ImageContent } from "./style";

const LoginController = () => {
  

  return (
    <Fragment>
      <ContentLogin>
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
