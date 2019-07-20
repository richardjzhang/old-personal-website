// @flow
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import About from './About';
import Creations from './Creations';
import SideMenu from './SideMenu';
import Panel from '../../components/Panel';
import {
  BASE_UNIT,
  borderRadius,
  breakPoints,
  colors,
  fontSize,
  fontWeight
} from '../../utils/themes.jsx';
import logo from '../../static/personal_logo.png';
import { urls } from '../../utils/urls.jsx';

export const PANEL_MIN_HEIGHT = '100vh';
const BUTTON_POSITION = 60;

const Container = styled.div`
  background-color: ${colors.ebony};
`;

const Button = styled.div`
  position: fixed;
  top: ${BUTTON_POSITION}px;
  right: ${BUTTON_POSITION}px;
  height: 40px;
  width: 150px;
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.light};
  border: ${BASE_UNIT / 2}px solid ${colors.dodgerBlue};
  border-radius: ${borderRadius.circle}px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${colors.dodgerBlue};
    transition: background-color 0.5s ease;
  }

  @media (max-width: ${breakPoints.large}px) {
    position: absolute;
    top: ${BUTTON_POSITION / 2}px;
    right: ${BUTTON_POSITION / 2}px;
    height: 35px;
    width: 100px;
    font-size: ${fontSize.normal}px;
  }
`;

const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: ${colors.dodgerBlue};

  &:hover {
    color: ${colors.white};
    transition: background-color 0.5s ease;
  }
`;

const Image = styled.img`
  margin-bottom: ${12 * BASE_UNIT}px;
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
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 20%;
  text-align: center;
  max-width: 85%;
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

const PanelWrapper = styled.div`
  color: ${colors.outerSpace};
`;

const handleTransition = (ref: any) => {
  return ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Landing = () => {
  const aboutRef = useRef(null);
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
      <Button>
        <ButtonLink href={urls.mailTo}>Say Hello!</ButtonLink>
      </Button>
      <div
        style={{
          backgroundColor:
            creationsRef.current != null &&
            scroll >= creationsRef.current.offsetTop
              ? colors.athensGrey
              : colors.ebony,
          transition: 'background-color 0.5s ease'
        }}
      >
        <Panel minHeight={PANEL_MIN_HEIGHT} isCentered>
          <TitleWrapper>
            <Fade delay={300}>
              <Image src={logo} alt="" />
            </Fade>
            <Fade bottom delay={500}>
              <Title>Hey, I'm Richard</Title>
              <Description>
                I craft code that executes people's dreams into reality
              </Description>
            </Fade>
          </TitleWrapper>
        </Panel>
        <div id="aboutRef" ref={aboutRef} />
        <About
          setAboutRef={() =>
            aboutRef.current != null && handleTransition(aboutRef)
          }
        />
        <div ref={creationsRef} />
        <Creations />
        <div ref={thoughtsRef} />
        <Panel minHeight={PANEL_MIN_HEIGHT} isCentered>
          <PanelWrapper>My thoughts coming soon...</PanelWrapper>
        </Panel>
      </div>
    </Container>
  );
};
export default Landing;
