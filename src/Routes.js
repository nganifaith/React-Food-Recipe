import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import MealDetails from './pages/MealDetailsPage';
import Home from './pages/Home';
import Categories from './pages/CategoryPage';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipe/:id" component={MealDetails} />
      <Route path="/categories" component={Categories} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
