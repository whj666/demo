import React from "react";
import { Route, HashRouter, Switch, Redirect } from "react-router-dom";
import "../public/public.less";
import Login from "../container/login";
import View from "../container/View";
import App from "../container";

class RouterMap extends React.Component {
  //权限验证
  check = () => {
    return sessionStorage.login ? (
      <App />
    ) : (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  };

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/view/:type/:id" component={View} />
          <Route path="/" render={this.check} />
        </Switch>
      </HashRouter>
    );
  }
}

export default RouterMap;
