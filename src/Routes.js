import Products from "./pages/products";
import About from "./pages/about";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import Invoice from "./pages/invoice";
import Item from "./pages/item";
import React from 'react';
import Layout from './layout';
import {
  Router,
  Route,
  browserHistory
} from 'react-router'

const Routes = (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route name="home"
        path="/"
        component={Home} />
      <Route name="about"
        path="about"
        component={About} />
      <Route name="products"
        path="products"
        component={Products} />
      <Route name="item"
        path="item/:id"
        component={Item} />
      <Route name="checkout"
        path="checkout"
        component={Checkout} />
      <Route name="invoice"
        path="invoice"
        component={Invoice} />
    </Route>
  </Router>
);

module.exports = Routes;