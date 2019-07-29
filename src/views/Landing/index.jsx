// @flow
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import About from './About';
import Creations from './Creations';
import Thoughts from './Thoughts';
import SideMenu from './SideMenu';
import Panel from '../../components/Panel';
import ChevronDown from '../../components/Icons/ChevronDown';
import {
  BASE_UNIT,
  breakPoints,
  colors,
  fontSize,
  fontWeight
} from '../../utils/themes.jsx';
import logo from '../../static/personal_logo.png';

export const PANEL_MIN_HEIGHT = '100vh';

const Container = styled.div`
  background-color: ${colors.ebony};
`;

const Logo = styled.img`
  margin-bottom: ${10 * BASE_UNIT}px;
  width: 30%;
  max-width: 200px;
  max-height: 200px;
  min-width: 125px;
  min-height: 125px;

  @media (max-width: ${breakPoints.large}px) {
    margin-bottom: ${10 * BASE_UNIT}px;
  }

  @media (max-width: ${breakPoints.small}px) {
    margin-bottom: ${8 * BASE_UNIT}px;
  }

  @media screen and (max-height: 600px) {
    width: 25%;
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
  max-width: 85%;
  margin-bottom: 100px;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: ${fontSize.xxxlarge}px;
  font-weight: ${fontWeight.bold};
  color: ${colors.white};

  @media (max-width: ${breakPoints.medium}px) {
    font-size: ${fontSize.xxlarge}px;
  }

  @media (max-width: ${breakPoints.small}px) {
    font-size: ${fontSize.xlarge}px;
  }
`;

const Description = styled.div`
  margin-top: ${6 * BASE_UNIT}px;
  max-width: 750px;
  font-size: ${fontSize.large}px;
  color: ${colors.white};

  @media (max-width: ${breakPoints.medium}px) {
    font-size: ${fontSize.xmedium}px;
  }

  @media (max-width: ${breakPoints.small}px) {
    font-size: ${fontSize.medium}px;
  }
`;

const handleTransition = (ref: any) => {
  return ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Landing = () => {
  const aboutRef = useRef(null);
  const backgroundRef = useRef(null);
  const creationsRef = useRef(null);
  const thoughtsRef = useRef(null);

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  });

  return (
    <Container>
      <SideMenu
        aboutRef={aboutRef}
        creationsRef={creationsRef}
        thoughtsRef={thoughtsRef}
        scroll={scroll}
        handleTransition={handleTransition}
      />
      <div
        style={{
          backgroundColor:
            backgroundRef.current != null &&
            scroll >= backgroundRef.current.offsetTop
              ? colors.brightGray
              : colors.ebony,
          transition: 'background-color 0.5s ease'
        }}
      >
        <Panel minHeight={PANEL_MIN_HEIGHT} isCentered>
          <TitleWrapper>
            <Fade delay={300}>
              <Logo src={logo} alt="" />
            </Fade>
            <Fade bottom delay={500}>
              <Title>Hey, I'm Richard</Title>
              <Description>
                I craft code that executes people's dreams into reality
              </Description>
            </Fade>
          </TitleWrapper>
          <ChevronDown setRef={() => handleTransition(aboutRef)} />
        </Panel>
        <div id="aboutRef" ref={aboutRef} />
        <About />
        <div ref={backgroundRef} />
        <div ref={creationsRef} style={{ marginTop: 200 }} />
        <div
          style={{
            ...(backgroundRef.current != null &&
            scroll >= backgroundRef.current.offsetTop
              ? {
                  visibility: 'visible',
                  transition: 'visibility 0.5s, opacity 0.5s linear',
                  opacity: 1
                }
              : {
                  visibility: 'hidden',
                  opacity: 0,
                  transition: 'visibility 0.5s, opacity 0.5s linear'
                })
          }}
        >
          <Creations />
        </div>
        <div ref={thoughtsRef} />

        <Thoughts />
      </div>
    </Container>
  );
};
export default Landing;
