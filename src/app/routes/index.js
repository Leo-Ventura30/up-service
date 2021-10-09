import React, { Fragment } from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import { isAuthenticated } from "../services/auth";
import { DashboardServicesScreen } from "../features/dashboard/screens/DashboardServices";
import FullCalendar from "../components/FullCalendar";
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

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        {/* <Route exact path="/" component={() => <Login />} />
        <PrivateRoute path="/dashboard" component={() => <Home />} />
        <Route path="/criar/conta" component={() => <Login />} /> */}
        <Route
          path="/v2/dashboard"
          component={() => <DashboardServicesScreen />}
        />
        <Route path="/calendar" component={() => <FullCalendar />} />

        <Redirect to={{ pathname: "/" }} />
      </Switch>
    </Fragment>
    <Fragment>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
