import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './layouts/About/About';
import Explain from './layouts/Explain';
import NotFound from './layouts/NotFound';
import RealTimeObjectDetection from './songil/RealTimeObjectDetection';

export default ({ childProps }) =>
  <Switch>
    <Route path="/Explain" exact component={Explain} props={childProps} />
    <Route path="/about" exact component={About} props={childProps} />
    <Route path="/" exact component={RealTimeObjectDetection} props={childProps} />
    <Route component={NotFound} />
  </Switch>;
