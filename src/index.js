// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WebFont from 'webfontloader';

import Landing from './views/Landing';
import './index.css';

WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif']
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
