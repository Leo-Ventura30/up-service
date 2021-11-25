import { Route, Redirect } from "react-router-dom";

import { getToken, isAuthenticated } from "../../services/auth";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuthenticated ? children : <Redirect to={{}} />;
      }}
    />
  );
};
export default PrivateRoute;
