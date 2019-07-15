// @flow
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Journey from './Journey';
import Panel from '../../components/Panel';
import {
  BASE_UNIT,
  borderRadius,
  breakPoints,
  colors,
  fontSize,
  fontWeight
} from '../../utils/themes.jsx';
import { urls } from '../../utils/urls.jsx';

export const PANEL_MIN_HEIGHT = '100vh';

const Container = styled.div`
  background-color: ${colors.ebony};
`;

const SideMenu = styled.div`
  position: fixed;
  top: 60px;
  left: 60px;

  @media (max-width: ${breakPoints.large}px) {
    display: none;
  }
`;

const Button = styled.div`
  position: fixed;
  top: 60px;
  right: 60px;
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
    top: 30px;
    right: 30px;
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

const Content = styled.div`
  background-color: ${colors.athensGrey};
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 85%;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: ${fontSize.xxxxlarge}px;
  font-weight: ${fontWeight.semibold};
  color: ${colors.white};

  @media (max-width: ${breakPoints.large}px) {
    font-size: ${fontSize.xlarge}px;
  }
`;

const Description = styled.div`
  margin-top: ${6 * BASE_UNIT}px;
  max-width: 750px;
  font-size: ${fontSize.large}px;
  font-weight: ${fontWeight.light};
  color: ${colors.white};

  @media (max-width: ${breakPoints.large}px) {
    font-size: ${fontSize.medium}px;
  }
`;

const PanelWrapper = styled.div`
  color: ${colors.athensGrey};
`;

const Contents = styled.div`
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.semibold};
  color: ${colors.white};
`;

const ContentLink = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: ${colors.dodgerBlue};
    transition: background-color 0.5s ease;
  }

  &:not(:last-child) {
    margin-bottom: ${8 * BASE_UNIT}px;
  }
`;

const handleTransition = (ref: any) => {
  return ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Landing = () => {
  const homeRef = useRef(null);
  const journeyRef = useRef(null);
  const storiesRef = useRef(null);
  const creationsRef = useRef(null);
  const lessonsRef = useRef(null);

  const [scroll, setScroll] = useState(0);

  const colorCheck = (currentRef: any, nextRef?: any) =>
    nextRef
      ? currentRef.current != null &&
        scroll >= currentRef.current.offsetTop &&
        nextRef.current != null &&
        scroll < nextRef.current.offsetTop
      : currentRef.current != null && scroll >= currentRef.current.offsetTop;

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  });

  return (
    <Container>
      <SideMenu>
        <Fade left delay={400}>
          <Contents
            style={{
              color:
                journeyRef.current != null &&
                scroll >= journeyRef.current.offsetTop &&
                colors.outerSpace
            }}
          >
            <ContentLink
              onClick={() =>
                journeyRef.current != null && handleTransition(journeyRef)
              }
              style={{
                color: colorCheck(journeyRef, storiesRef) && colors.dodgerBlue
              }}
            >
              Journey
            </ContentLink>
            <ContentLink
              onClick={() =>
                storiesRef.current != null && handleTransition(storiesRef)
              }
              style={{
                color: colorCheck(storiesRef, creationsRef) && colors.dodgerBlue
              }}
            >
              Stories
            </ContentLink>
            <ContentLink
              onClick={() =>
                creationsRef.current != null && handleTransition(creationsRef)
              }
              style={{
                color: colorCheck(creationsRef, lessonsRef) && colors.dodgerBlue
              }}
            >
              Creations
            </ContentLink>
            <ContentLink
              onClick={() =>
                lessonsRef.current != null && handleTransition(lessonsRef)
              }
              style={{ color: colorCheck(lessonsRef) && colors.dodgerBlue }}
            >
              Lessons
            </ContentLink>
          </Contents>
        </Fade>
      </SideMenu>
      <Button>
        {' '}
        <ButtonLink href={urls.mailTo}>Say Hello!</ButtonLink>
      </Button>

      <Content>
        <div ref={homeRef} />
        <Panel
          minHeight={PANEL_MIN_HEIGHT}
          backgroundColor={colors.ebony}
          isCentered
        >
          <TitleWrapper>
            <Fade bottom delay={400}>
              <Title>Hey, I'm Richard</Title>
              <Description>
                I craft code that executes people's dream's into reality
              </Description>
            </Fade>
          </TitleWrapper>
        </Panel>
        <div id="journeyRef" ref={journeyRef} />
        <Journey
          setJourneyRef={() =>
            journeyRef.current != null && handleTransition(journeyRef)
          }
        />
        <div ref={storiesRef} />
        <Panel minHeight={PANEL_MIN_HEIGHT} isCentered>
          <PanelWrapper>My stories coming soon...</PanelWrapper>
        </Panel>
        <div ref={creationsRef} />
        <Panel minHeight={PANEL_MIN_HEIGHT} isCentered>
          <PanelWrapper>My creations coming soon...</PanelWrapper>
        </Panel>
        <div ref={lessonsRef} />
        <Panel minHeight={PANEL_MIN_HEIGHT} isCentered>
          <PanelWrapper>My lessons coming soon...</PanelWrapper>
        </Panel>
      </Content>
    </Container>
  );
};
export default Landing;
