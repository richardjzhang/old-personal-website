// @flow
import React from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WebFont from 'webfontloader';

import Landing from './views/Landing';
import Error from './views/Error';
import './index.css';

ReactGA.initialize('UA-144304332-1', { debug: true });

WebFont.load({
  google: {
    families: ['Jost:400', 'Jost:500', 'Jost:600', 'sans-serif']
  }
});

const root = document.getElementById('root');
root != null &&
  ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Landing />} />
        <Route exact path="*" component={() => <Error />} />
      </Switch>
    </Router>,
    root
  );
