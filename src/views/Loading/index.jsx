// @flow
import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import loading_bar from '../../static/bar.svg';

import { colors, fontSize, fontWeight } from '../../utils/themes.jsx';

ReactGA.pageview('error');

const Root = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  background-color: ${colors.mirage};
  font-size: ${fontSize.xxlarge}px;
  font-weight: ${fontWeight.bold};
  color: ${colors.white};
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 40%;
  max-width: 500px;
  text-align: center;
`;

const Error = () => (
  <Root>
    <IconWrapper>
      <img src={loading_bar} alt="loading" />
    </IconWrapper>
  </Root>
);

export default Error;
