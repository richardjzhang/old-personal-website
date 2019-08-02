// @flow

import React from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WebFont from 'webfontloader';

import Landing from './views/Landing';
import './index.css';

ReactGA.initialize('UA-144304332-1', { debug: true });
ReactGA.pageview('landing');

WebFont.load({
  google: {
    families: ['Montserrat:400,500,600,700', 'sans-serif']
  }
});

const root = document.getElementById('root');
if (root !== null) {
  ReactDOM.render(
    <Router>
      <Route component={() => <Landing />} />
    </Router>,
    root
  );
}
