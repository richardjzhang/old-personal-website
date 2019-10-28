// @flow
import React, { useRef, useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import About from './About';
import Creations from './Creations';
import Thoughts from './Thoughts';
import Panel from '../../components/Panel';
import {
  BASE_UNIT,
  breakPoints,
  colors,
  fontSize,
  fontWeight
} from '../../utils/themes.jsx';
import camp_fire from '../../static/camp_fire.svg';

ReactGA.pageview('landing');

const PANEL_MIN_HEIGHT = '100vh';
const NAVBAR_GUTTER = 60;
const HERO_GUTTER = NAVBAR_GUTTER + 40;

const Container = styled.div`
  background-color: ${colors.ebony};
`;

const Hero = styled.img`
  position: absolute;
  top: ${HERO_GUTTER}px;
  right: 50px;
  min-width: 700px;
  width: 60%;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 120px;
  max-width: 400px;
`;

const Title = styled.div`
  font-size: ${fontSize.xxxlarge}px;
  font-weight: ${fontWeight.bold};
  line-height: 1.25;
  color: ${colors.athensGrey};
`;

const Description = styled.div`
  display: inline-flex;
  margin-top: ${6 * BASE_UNIT}px;
  font-size: ${fontSize.large}px;
  line-height: 1.25;
  color: ${colors.porcelain};
`;

const Divider = styled.div`
  margin: ${25 * BASE_UNIT}px auto;
  max-width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakPoints.large}px) {
    max-width: 66%;
  }
`;

const Line = styled.span`
  flex: 1;
  background-color: ${colors.paleSky};
  height: 1px;
`;

const Square = styled.span`
  width: 9px;
  height: 9px;
  margin: 0 10px;
  border: 1px solid ${colors.paleSky};
  transform: rotate(45deg);
  border-radius: 1px;
`;

const Landing = () => {
  const backgroundRef = useRef(null);

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  });

  return (
    <Container>
      <div
        style={{
          backgroundColor:
            backgroundRef.current != null &&
            scroll >= backgroundRef.current.offsetTop
              ? colors.mirage
              : '#575a89',
          transition: 'background-color 0.5s ease'
        }}
      >
        <Panel
          minHeight={PANEL_MIN_HEIGHT}
          isCenteredVertically
          isCenteredHorizontally
        >
          <Hero src={camp_fire} alt="hero" />
          <TitleWrapper>
            <Fade right delay={500}>
              <Title>Hey!</Title>
              <Title>I'm Richard.</Title>
            </Fade>
            <Fade delay={1500}>
              <Description>
                I like coming up with wacky ideas. And making them happen.
              </Description>{' '}
            </Fade>
          </TitleWrapper>
        </Panel>
        <div ref={backgroundRef} style={{ marginBottom: 200 }} />
        <div
          style={{
            ...(backgroundRef.current != null &&
            scroll >= backgroundRef.current.offsetTop
              ? {
                  visibility: 'visible',
                  transition: 'visibility 0.5s, opacity 0.5s ease-in-out',
                  opacity: 1
                }
              : {
                  visibility: 'hidden',
                  opacity: 0,
                  transition: 'visibility 0.5s, opacity 0.5s ease-in-out'
                })
          }}
        >
          <About />
          <Divider>
            <Line />
            <Square />
            <Line />
          </Divider>
          <Creations />
          <Divider>
            <Line />
            <Square />
            <Line />
          </Divider>
          <Thoughts />
        </div>
      </div>
    </Container>
  );
};
export default Landing;
