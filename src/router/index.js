import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "src/App";
import Admin from "src/Admin";
import Home from "src/views/home";
import NotFound from "src/views/404";
import Login from "src/views/login";
import Buttons from "src/views/ui/buttons";

export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/admin"
            render={() => (
              <Admin>
                <Route path="/admin/home" component={Home} />
                <Route path="/admin/ui/buttons" component={Buttons} />
              </Admin>
            )}
          />
          <Route component={NotFound} />
        </App>
      </HashRouter>
    );
  }
}
