import React from "react";
import { Route, Switch } from "react-router-dom";

import { ContentStyle, ContentSearch } from "../style";
import UserComponent from "./ComponentsController";

import Search from "./Search";

const Content = () => {
  return (
    <ContentStyle>
      <ContentSearch>
        <Search />
      </ContentSearch>
      <Switch>
        <Route exact path="/dashboard" component={UserComponent} />
        <Route path="/dashboard/calendar">calendar</Route>
        <Route path="/dashboard/perfil/settings">config</Route>
      </Switch>
    </ContentStyle>
  );
};

export default Content;
