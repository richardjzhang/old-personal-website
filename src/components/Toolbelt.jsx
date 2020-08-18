// @flow
import React from 'react';
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
import Media from 'components/Media';

import { BASE_UNIT, breakPoints } from 'utils/themes.jsx';

const LOGOS = [
  {
    image: html5Logo,
    url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
  },
  { image: css3Logo, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  {
    image: javascriptLogo,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  { image: reactLogo, url: 'https://reactjs.org/' },
  { image: graphqlLogo, url: 'https://graphql.org/' },
  { image: eslintLogo, url: 'https://eslint.org/' },
  { image: flowLogo, url: 'https://flow.org/' },
  { image: storybookLogo, url: 'https://storybook.js.org/' },
  { image: jestLogo, url: 'https://jestjs.io/' },
  { image: gitLogo, url: 'https://git-scm.com/' },
  { image: mysqlLogo, url: 'https://www.mysql.com/' },
  { image: nodejsLogo, url: 'https://nodejs.org/en/' },
  { image: pythonLogo, url: 'https://www.python.org/' },
  { image: djangoLogo, url: 'https://www.djangoproject.com/' }
];

const LOGO_GAP = 6 * BASE_UNIT;
const TRANSITION_DURATION = '0.4s';
const TRANSITION_DISTANCE = 2 * BASE_UNIT;

const Anchor = styled.a`
  margin: ${LOGO_GAP}px;
  transition: padding ${TRANSITION_DURATION} ease,
    margin ${TRANSITION_DURATION} ease;
  &:hover {
    margin-top: ${LOGO_GAP - TRANSITION_DISTANCE}px;
    padding-bottom: ${TRANSITION_DISTANCE}px;
  }
`;

const Logo = ({
  height,
  image,
  url
}: {|
  height: number,
  image: string,
  url: string
|}) => (
  <Anchor href={url} target="_blank">
    <img src={image} alt="logo" style={{ height }} />
  </Anchor>
);

const Root = styled.div`
  margin: ${-LOGO_GAP}px;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Toolbelt = () => (
  <Media query={`(min-width: ${breakPoints.large}px)`}>
    {isDesktopView => (
      <Root>
        {LOGOS.map(({ image, url }, index) => (
          <Logo
            key={image}
            height={isDesktopView ? 150 : 75}
            image={image}
            url={url}
          />
        ))}
      </Root>
    )}
  </Media>
);

export default Toolbelt;
