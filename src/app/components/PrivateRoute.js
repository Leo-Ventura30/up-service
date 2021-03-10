import { Route, Redirect } from "react-router-dom";

import RenovaToken from "./RenovaToken.js";
import Loading from "./Loading";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return RenovaToken() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
export default PrivateRoute;
