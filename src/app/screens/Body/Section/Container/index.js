import React from "react";
import { Route, Switch } from "react-router-dom";

import { ContentStyle } from "../style";
import UserComponent from "./Content";

const Content = () => {
  return (
    <ContentStyle>
      <Switch>
        <Route exact path="/dashboard" component={UserComponent} />
        <Route path="/dashboard/calendar">calendar</Route>
        <Route path="/dashboard/perfil/settings">config</Route>
      </Switch>
    </ContentStyle>
  );
};

export default Content;
