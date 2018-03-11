import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import Header from "../components/Header";
import HomePage from "../components/HomePage";
import PorfolioPage from "../components/PortfolioPage";
import PortfolioItemPage from "../components/PortfolioItemPage";
import ContactPage from "../components/ContactPage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/portfolio/:id" component={PortfolioItemPage} />
        <Route path="/portfolio" component={PorfolioPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
