import React from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContainer } from "../../hooks/auth";

export default function PublicRouter({ component: Component, ...props }) {
  const { token } = AuthContainer.useContainer();
  return (
    <Route
      path={props.path}
      render={() => (!token ? <Component /> : <Redirect to={props.redirect} />)}
    />
  );
}
