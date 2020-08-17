// @flow
import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import css3Logo from 'assets/css3_logo.svg';
import djangoLogo from 'assets/django_logo.svg';
import eslintLogo from 'assets/eslint_logo.svg';
import flowLogo from 'assets/flow_logo.svg';
import gitLogo from 'assets/git_logo.svg';
import graphqlLogo from 'assets/graphql_logo.svg';
import html5Logo from 'assets/html5_logo.svg';
import javascriptLogo from 'assets/javascript_logo.svg';
import jestLogo from 'assets/jest_logo.svg';
import mysqlLogo from 'assets/mysql_logo.svg';
import nodejsLogo from 'assets/nodejs_logo.svg';
import pythonLogo from 'assets/python_logo.svg';
import reactLogo from 'assets/react_logo.svg';
import storybookLogo from 'assets/storybook_logo.svg';

import { BASE_UNIT } from 'utils/themes.jsx';

const GUTTER = 6 * BASE_UNIT;
const LOGOS = [
  html5Logo,
  css3Logo,
  javascriptLogo,
  reactLogo,
  graphqlLogo,
  eslintLogo,
  flowLogo,
  storybookLogo,
  jestLogo,
  gitLogo,
  mysqlLogo,
  nodejsLogo,
  pythonLogo,
  djangoLogo
];

const LogoWrapper = styled.img`
  height: 100%;
  width: 100%;
`;

const Logo = ({ image }: {| image: string |}) => (
  <div style={{ margin: GUTTER }}>
    <LogoWrapper src={image} alt="logo" />
  </div>
);

const Root = styled.div`
  margin: ${-GUTTER}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Toolbelt = () => (
  <Root>
    {LOGOS.map((logo, index) => (
      <Logo key={logo} image={logo} />
    ))}
  </Root>
);

export default Toolbelt;
