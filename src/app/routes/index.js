import React, { Fragment } from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Login from "../screens/Login";
import Home from "../screens/Home";
import api from "../services/api";
const verifyToken = (token) => {
  if (!token) return false;
  api
    .get(`/verify/${token}/key`)
    .then((res) => {
      console.log(res.data);
      if (!res.data.auth) throw new Error(res.data.message);
    })
    .catch((err) => {
      console.log(err.message);
      localStorage.clear();
      return false;
    });
  return true;
};
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      verifyToken(localStorage.getItem("token")) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" path="/" />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={() => <Login />} />
        <PrivateRoute path="/dashboard" component={() => <Home />} />
        {/* <Route path="/dashboard" component={() => <Home />} /> */}
        <Route path="/criar/conta" component={() => <Login />} />
        <Route
          path="*"
          component={() => (
            <h1>
              <a href="/">Voltar para o inicio</a> <br />
              Page not found
            </h1>
          )}
        />
      </Switch>
    </Fragment>
    <Fragment>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
