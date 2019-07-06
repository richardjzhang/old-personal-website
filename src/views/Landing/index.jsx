// @flow
import React from 'react';
import styled from 'styled-components';
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
import logo from '../../static/personal_logo_transparent.png';

export const PANEL_MIN_HEIGHT = '100vh';
const SIDE_PANEL_WIDTH = '35%';
const MAIN_PANEL_WIDTH = '65%';

const LeftPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${8 * BASE_UNIT}px ${8 * BASE_UNIT}px ${20 * BASE_UNIT}px
    ${8 * BASE_UNIT}px;
  box-sizing: border-box;
  background-color: ${colors.athensGray};

  @media (min-width: ${breakPoints.large}px) {
    position: fixed;
    left: 0;
    top: 0;
    width: ${SIDE_PANEL_WIDTH};
    height: 100vh;
  }
`;

const RightPanel = styled.div`
  @media (min-width: ${breakPoints.large}px) {
    width: ${MAIN_PANEL_WIDTH};
    margin-left: ${SIDE_PANEL_WIDTH};
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 85%;
`;

const Image = styled.img`
  width: 40%;
  margin-bottom: ${8 * BASE_UNIT}px;
  max-width: 200px;
  max-height: 200px;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: ${fontSize.xxlarge}px;
  font-weight: ${fontWeight.semibold};
  color: ${colors.outerSpace};
`;

const Description = styled.div`
  font-size: ${fontSize.xmedium}px;
  margin-top: ${6 * BASE_UNIT}px;
  font-weight: ${fontWeight.light};
  color: ${colors.outerSpace};
`;
const Button = styled.div`
  padding: ${4 * BASE_UNIT}px ${4 * BASE_UNIT}px;
  background-color: ${colors.pickledBluewood};
  width: 175px;
  margin-top: ${12 * BASE_UNIT}px;
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.light};
  text-align: center;
  border-radius: ${borderRadius.circle}px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${colors.cloudBurst};
    transition: background-color 0.5s ease;
  }
`;

const ButtonLink = styled.a`
  text-decoration: none;
  width: 100%;
  color: ${colors.white};
`;

const PanelWrapper = styled.div`
  color: ${colors.tropicalBlue};
`;

const ContentLink = styled.div`
  margin-bottom: ${8 * BASE_UNIT}px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${fontSize.xlarge}px;
  font-weight: ${fontWeight.semibold};
  color: ${colors.white};

  &:hover {
    color: ${colors.tropicalBlue};
    transition: background-color 0.5s ease;
  }
`;

const handleTransition = (ref: any) => {
  return ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Landing = () => {
  const journeyRef = React.useRef(null);
  const storiesRef = React.useRef(null);
  const creationsRef = React.useRef(null);
  const lessonsRef = React.useRef(null);
  return (
    <React.Fragment>
      <LeftPanel>
        <TitleWrapper>
          <Image src={logo} alt="" />
          <Title>Richard Zhang</Title>
          <Description>
            Crafting code that executes people's dream's into reality
          </Description>
          <Button>
            <ButtonLink href={urls.mailTo}>Get in touch!</ButtonLink>
          </Button>
        </TitleWrapper>
      </LeftPanel>
      <RightPanel>
        <Panel
          minHeight={PANEL_MIN_HEIGHT}
          backgroundColor={colors.outerSpace}
          isCentered
        >
          <PanelWrapper>
            <ContentLink
              onClick={() =>
                journeyRef.current != null && handleTransition(journeyRef)
              }
            >
              My Journey
            </ContentLink>
            <ContentLink
              onClick={() =>
                storiesRef.current != null && handleTransition(storiesRef)
              }
            >
              My Stories
            </ContentLink>
            <ContentLink
              onClick={() =>
                creationsRef.current != null && handleTransition(creationsRef)
              }
            >
              My Creations
            </ContentLink>
            <ContentLink
              onClick={() =>
                lessonsRef.current != null && handleTransition(lessonsRef)
              }
            >
              My Lessons
            </ContentLink>
          </PanelWrapper>
        </Panel>
        <div ref={journeyRef} />
        <Journey />
        <div ref={storiesRef} />
        <Panel
          minHeight={PANEL_MIN_HEIGHT}
          backgroundColor={colors.carribeanGreen}
        >
          <PanelWrapper>My stories coming soon...</PanelWrapper>
        </Panel>
        <div ref={creationsRef} />
        <Panel minHeight={PANEL_MIN_HEIGHT} backgroundColor={colors.mustard}>
          <PanelWrapper style={{ color: colors.cloudBurst }}>
            My creations coming soon...
          </PanelWrapper>
        </Panel>
        <div ref={lessonsRef} />
        <Panel
          minHeight={PANEL_MIN_HEIGHT}
          backgroundColor={colors.cornflowerBlue}
        >
          <PanelWrapper>My lessons coming soon...</PanelWrapper>
        </Panel>
      </RightPanel>
    </React.Fragment>
  );
};
export default Landing;
