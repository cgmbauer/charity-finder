import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FindYourCharity from '../pages/findyourcharity';
import About from '../pages/about';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={FindYourCharity} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;
