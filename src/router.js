import React from 'react';
import Layout from './layout';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';

import About from "./pages/about";
import Products from "./pages/products";
import CheckoutProds from "./pages/checkout";
import Home from "./pages/home";
import Items from "./pages/items";
import Invoice from "./pages/invoice";
const Routes = 
    <Router history={browserHistory} >
      <Route component={Layout}>
      <Route name="home" path="/" component={Home} />
      <Route name="about" path="/about" component={About} />
      <Route name="products" path="products" component={Products} />
      <Route name="items" path="items/:id" component={Items} />
      <Route name="checkout" path="checkout" component={CheckoutProds} />
      <Route name="invoice" path="invoice" component={Invoice} />
      </ Route>
    </Router>

export default Routes;