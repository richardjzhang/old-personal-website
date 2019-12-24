// @flow
import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';

import Hero from './Hero.jsx';

ReactGA.pageview('landing');

const Root = styled.div``;

const Landing = () => (
  <Root>
    <Hero />
  </Root>
);

export default Landing;
