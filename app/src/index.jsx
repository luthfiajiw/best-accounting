import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { initializeIcons } from '@uifabric/icons';

import Home from './containers/home/Home';

initializeIcons();

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
