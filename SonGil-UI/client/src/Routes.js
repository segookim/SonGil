import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './layouts/About';
import Explain from './layouts/Explain';
import NotFound from './layouts/NotFound';
import Home from './songil/Home';
import HandInfo from './layouts/HandInfo';

export default ({ childProps }) =>
  <Switch>
    <Route path="/Explain" exact component={Explain} props={childProps} />
    <Route path="/about" exact component={About} props={childProps} />
    <Route path="/HandInfo" exact component={HandInfo} props={childProps} />
    <Route path="/" exact component={Home} props={childProps} />
    <Route component={NotFound} />
  </Switch>;
