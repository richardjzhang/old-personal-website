// @flow
import React, { useRef, useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';

import Hero from './Hero.jsx';
import About from './About.jsx';
import Creations from './Creations.jsx';
import Thoughts from './Thoughts.jsx';
import Navbar from 'components/Navbar';
import { BASE_UNIT, colors } from 'utils/themes.jsx';

ReactGA.pageview('landing');

const Root = styled.div`
  background-color: ${colors.jellyBean};
`;

const MainContent = styled.div`
  transition: visibility 0.5s, opacity 0.5s ease-in-out;
`;

const Divider = styled.div(props => ({
  flexShrink: 0,
  height: 50 * BASE_UNIT,
  width: 50 * BASE_UNIT
}));

const Landing = () => {
  const contentRef = useRef(null);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  });

  return (
    <Root>
      <Navbar
        backgroundColor={
          contentRef.current != null && scroll >= contentRef.current.offsetTop
            ? colors.mirage
            : colors.jellyBean
        }
      />
      <Hero />
      <Divider />
      <MainContent
        ref={contentRef}
        style={{
          ...(contentRef.current != null &&
          scroll >= contentRef.current.offsetTop - 50 * BASE_UNIT
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
        <Creations />
        <Thoughts />
      </MainContent>
    </Root>
  );
};
export default Landing;
