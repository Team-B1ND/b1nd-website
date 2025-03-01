import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import PageTemplate from "./components/PageTemplate";
import Home from "./page/home";

const Routes = () => {

  return (
      <Switch>
      <Route path="/" element={<PageTemplate />}>
        <Route path="/" element={<Home/>} />
      </Route>
      </Switch>
  );
};

export default Routes;