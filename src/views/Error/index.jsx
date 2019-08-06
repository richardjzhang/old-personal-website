// @flow
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  BASE_UNIT,
  colors,
  fontSize,
  fontWeight
} from '../../utils/themes.jsx';

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

const Message = styled.div`
  position: absolute;
  top: 40%;
  max-width: 500px;
  text-align: center;
`;

const HomeLink = styled.div`
  margin-top: ${6 * BASE_UNIT}px;
  font-size: ${fontSize.large}px;
  font-weight: ${fontWeight.bold};
  color: ${colors.malibu};
  cursor: pointer;
`;

const Error = () => (
  <Root>
    <Message>
      <div>Oops! It seems like this page doesn't exist :(</div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <HomeLink>Go Home</HomeLink>
      </Link>
    </Message>
  </Root>
);

export default Error;
