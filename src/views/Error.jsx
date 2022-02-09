import React from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Panel, { Column } from 'components/Panel';
import {
  BASE_UNIT,
  breakPoints,
  colors,
  fontSize,
  fontWeight
} from 'utils/themes.jsx';

ReactGA.pageview('error');

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
`;

const Message = styled.div`
  font-size: ${fontSize.xxlarge}px;
  font-weight: ${fontWeight.semibold};
  color: ${colors.honorNight};

  @media (max-width: ${breakPoints.small}px) {
    font-size: ${fontSize.large}px;
  }
`;

const HomeLink = styled.div`
  margin-top: ${8 * BASE_UNIT}px;
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.semibold};
  text-transform: uppercase;
  color: ${colors.cloudBurst};
  cursor: pointer;
`;

const Error = () => (
  <Panel>
    <Column
      width="100%"
      height="100vh"
      padding={20 * BASE_UNIT}
      backgroundColor={colors.cream}
    >
      <Wrapper>
        <Message>Oops! It seems like this page doesn't exist :(</Message>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <HomeLink>Go Home</HomeLink>
        </Link>
      </Wrapper>
    </Column>
  </Panel>
);

export default Error;
