import React from "react";
import { Route, Switch } from "react-router-dom";
import Index from "./views/index";
import List from "./views/list/index";
import House from "./views/house/index";
import Form from "./views/form/index";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route path="/list" component={List} />
    <Route path="/house/:id" component={House} />
    <Route path="/form" component={Form} />
  </Switch>
);
