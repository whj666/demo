import React from "react";
import { Route, HashRouter, Switch, Redirect } from "react-router-dom";
import "../common/public";
import NotFound from "../container/error";
import Login from "../container/login";
import app from "../container";

class RouterMap extends React.Component {
  render() {
    return (
      <HashRouter>
	      <Switch>
	      	<Route path="/login" component={Login} />
	        <Route path="/" component={app} />
	        <Route component={NotFound} />
	      </Switch>
      </HashRouter>
    )
  }
}

export default RouterMap