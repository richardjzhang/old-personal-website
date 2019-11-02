// @flow
import React, { useRef, useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';

import Hero from './Hero.jsx';
import About from './About.jsx';
import Creations from './Creations.jsx';
import Thoughts from './Thoughts.jsx';
import { BASE_UNIT, colors } from 'utils/themes.jsx';

ReactGA.pageview('landing');

const Root = styled.div`
  transition: background-color 0.5s ease;
`;

const MainContent = styled.div`
  transition: visibility 0.5s, opacity 0.5s ease-in-out;
`;

const Divider = styled.div(props => ({
  flexShrink: 0,
  ...(props.small
    ? {
        height: 12 * BASE_UNIT,
        width: 12 * BASE_UNIT
      }
    : {}),
  ...(props.large
    ? {
        height: 70 * BASE_UNIT,
        width: 70 * BASE_UNIT
      }
    : {})
}));

const Landing = () => {
  const backgroundRef = useRef(null);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  });

  return (
    <Root
      style={{
        backgroundColor:
          backgroundRef.current != null &&
          scroll >= backgroundRef.current.offsetTop
            ? colors.white
            : colors.waikawaGray
      }}
    >
      <Hero />
      <Divider ref={backgroundRef} large />
      <MainContent
        style={{
          ...(backgroundRef.current != null &&
          scroll >= backgroundRef.current.offsetTop
            ? {
                visibility: 'visible',
                opacity: 1
              }
            : {
                visibility: 'hidden',
                opacity: 0
              })
        }}
      >
        <About />
        <Divider small />
        <Creations />
        <Divider small />
        <Thoughts />
      </MainContent>
    </Root>
  );
};
export default Landing;
