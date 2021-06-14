import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './layouts/About/About';
import Home from './layouts/Home';
import Login from './layouts/Account/Login/Login';
import NotFound from './layouts/NotFound';
import RealTimeObjectDetection from './songil/RealTimeObjectDetection';

export default ({ childProps }) =>
  <Switch>
    <Route path="/" exact component={Home} props={childProps} />
    <Route path="/about" exact component={About} props={childProps} />
    <Route path="/RealTimeObjectDetection" exact component={RealTimeObjectDetection} props={childProps} />
    {/* <Route path="/Account" exact component={Login} props={childProps} /> */}
    <Route component={NotFound} />
  </Switch>;
