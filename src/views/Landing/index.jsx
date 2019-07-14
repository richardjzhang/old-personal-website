// @flow
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Journey from './Journey';
import FixedHeader from './FixedHeader';
import Panel from '../../components/Panel';
import {
  BASE_UNIT,
  boxShadow,
  borderRadius,
  breakPoints,
  colors,
  fontSize,
  fontWeight
} from '../../utils/themes.jsx';
import { urls } from '../../utils/urls.jsx';
import logo from '../../static/personal_logo_transparent.png';
import background from '../../static/abstract_background_calm_water.png';

export const PANEL_MIN_HEIGHT = '100vh';
const SIDE_PANEL_WIDTH = '35%';
const MAIN_PANEL_WIDTH = '65%';
const HEADER_OPTIONS = [
  {
    title: 'Home',
    backgroundColor: colors.white
  },
  {
    title: 'Journey',
    backgroundColor: colors.dodgerBlue
  },
  {
    title: 'Stories',
    backgroundColor: colors.carribeanGreen
  },
  {
    title: 'Creations',
    backgroundColor: colors.mustard
  },
  {
    title: 'Lessons',
    backgroundColor: colors.cornflowerBlue
  }
];

const LeftPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
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
  width: 75%;
  margin-bottom: ${4 * BASE_UNIT}px;
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
  display: flex;
  background-color: ${colors.pickledBluewood};
  width: 175px;
  margin-top: ${12 * BASE_UNIT}px;
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.light};
  text-align: center;
  border-radius: ${borderRadius.circle}px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  box-shadow: ${boxShadow};

  &:hover {
    background-color: ${colors.outerSpace};
    transition: background-color 0.5s ease;
  }
`;

const ButtonLink = styled.a`
  padding: ${4 * BASE_UNIT}px;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: ${colors.white};
`;

const PanelWrapper = styled.div`
  color: ${colors.athensGrey};
`;

const ContentsWrapper = styled.div`
  display: inherit;
  flex-direction: inherit;
  align-items: inherit;
  justify-content: inherit;
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  -webkit-background-size: cover !important;
  -moz-background-size: cover !important;
  -o-background-size: cover !important;
  background-size: cover !important;
  background-position: center center;
  background-repeat: no-repeat;
  image-rendering: -webkit-optimize-contrast;
`;

const Contents = styled.div`
  padding: ${12 * BASE_UNIT}px;
  border: ${2 * BASE_UNIT}px solid ${colors.ebony};
  border-radius: ${borderRadius.regular}px;
  font-size: ${fontSize.xlarge}px;
  font-weight: ${fontWeight.semibold};
  color: ${colors.outerSpace};
`;

const ContentLink = styled.div`
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: ${colors.black};
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
  const journeyRef = React.useRef(null);
  const storiesRef = React.useRef(null);
  const creationsRef = React.useRef(null);
  const lessonsRef = React.useRef(null);
  return (
    <React.Fragment>
      <LeftPanel>
        <TitleWrapper>
          <Fade delay={300}>
            <Image src={logo} alt="" />
          </Fade>
          <Fade left delay={500}>
            <Title>Richard Zhang</Title>
            <Description>
              Crafting code that executes people's dream's into reality
            </Description>
          </Fade>
          <Fade bottom delay={500}>
            <Button>
              <ButtonLink href={urls.mailTo}>Get in touch!</ButtonLink>
            </Button>
          </Fade>
        </TitleWrapper>
      </LeftPanel>
      <RightPanel>
        <Panel
          minHeight={PANEL_MIN_HEIGHT}
          backgroundColor={colors.outerSpace}
          isCentered
        >
          <ContentsWrapper>
            <Fade bottom delay={500}>
              <Contents>
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
                    creationsRef.current != null &&
                    handleTransition(creationsRef)
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
              </Contents>
            </Fade>
          </ContentsWrapper>
        </Panel>
        <div ref={journeyRef} />
        <Journey
          setJourneyRef={() =>
            journeyRef.current != null && handleTransition(journeyRef)
          }
        />
        <div ref={storiesRef} />
        <Panel
          minHeight={PANEL_MIN_HEIGHT}
          backgroundColor={colors.bayOfMany}
          isCentered
        >
          <PanelWrapper>My stories coming soon...</PanelWrapper>
        </Panel>
        <div ref={creationsRef} />
        <Panel
          minHeight={PANEL_MIN_HEIGHT}
          backgroundColor={colors.astronaut}
          isCentered
        >
          <PanelWrapper>My creations coming soon...</PanelWrapper>
        </Panel>
        <div ref={lessonsRef} />
        <Panel
          minHeight={PANEL_MIN_HEIGHT}
          backgroundColor={colors.cornflowerBlue}
          isCentered
        >
          <PanelWrapper>My lessons coming soon...</PanelWrapper>
        </Panel>
      </RightPanel>
    </React.Fragment>
  );
};
export default Landing;
