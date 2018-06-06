import React from "react";
import { Route, HashRouter, Switch, Redirect } from "react-router-dom";
import "../public/public.less";
import Login from "../container/login";
import app from "../container";

class RouterMap extends React.Component {
  render() {
    return (
      <HashRouter>
	      <Switch>
	      	<Route path="/login" component={Login} />
	        <Route path="/" component={app} />
	      </Switch>
      </HashRouter>
    )
  }
}

export default RouterMap