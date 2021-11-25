import React from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import { isAuthenticated } from "../services/auth";
import { DashboardServicesScreen } from "../features/dashboard/screens/DashboardServicesScreen";
import { HomeServicesScreen } from "../features/home/screens/HomeServicesScreen"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  
  return(
  
  <BrowserRouter>
     
    <Switch>
      {/* <Route exact path="/" component={() => <Login />} />
        <PrivateRoute path="/dashboard" component={() => <Home />} />
        <Route path="/criar/conta" component={() => <Login />} /> */}
      <Route path="/v2/home" component={()=><HomeServicesScreen/>}/>

      <Route
        path="/v2/dashboard"
        component={() => <DashboardServicesScreen />}
      />
      <Redirect to={{ pathname: "/v2/home" }} />          
    </Switch>
  </BrowserRouter>)
};

export default Routes;
