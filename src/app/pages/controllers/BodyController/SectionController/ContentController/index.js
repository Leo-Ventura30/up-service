import React from "react";

import "./style.css";
import { ContentStyle } from "./style";
import { Route, Switch } from "react-router-dom";
import UserComponent from "../ComponentsController";

const Content = () => {
  return (
    <ContentStyle>
      <Switch>
        <Route path="/dashboard">
          <UserComponent />
        </Route>
        <Route path="/dashboard/calendar">calendar</Route>
        <Route path="/dashboard/perfil/settings">config</Route>
      </Switch>
    </ContentStyle>
  );
};

export default Content;
