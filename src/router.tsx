import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import PageTemplate from "./components/PageTemplate";
import Home from "./page/home";
import Service from "./page/service/service";
import Blog from "./page/blog/blog";

const Routes = () => {

  return (
      <Switch>
      <Route path="/" element={<PageTemplate />}>
        <Route path="/" element={<Home/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/blog" element={<Blog/>} />
      </Route>
      </Switch>
  );
};

export default Routes;