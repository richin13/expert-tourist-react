import React from 'react';
import {Route, Switch} from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Trip from './components/Trip';
import NotFound from './components/NotFound';

const Routes = () => (
  <div id="container">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/trip" component={Trip}/>
      <Route component={NotFound}/>
    </Switch>
  </div>
);

export default Routes;
