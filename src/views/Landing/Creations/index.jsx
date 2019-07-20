import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import Panel from '../../../components/Panel';
import HumanVsComputer from '../../../components/HumanVsComputer';
import { PANEL_MIN_HEIGHT } from '../.';
import {
  BASE_UNIT,
  breakPoints,
  colors,
  fontSize,
  fontWeight,
  hoverColors,
  lineHeight
} from '../../../utils/themes.jsx';

const FADE_DELAY = 300;

const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
`;

const Section = styled.div`
  margin-top: ${8 * BASE_UNIT}px;
  text-align: center;
`;

const SectionTitle = styled.div`
  margin-bottom: ${2 * BASE_UNIT}px;
  font-size: ${fontSize.large}px;
  font-weight: ${fontWeight.semibold};
  color: ${colors.outerSpace};

  @media (max-width: ${breakPoints.medium}px) {
    font-size: ${fontSize.xmedium}px;
  }

  @media (max-width: ${breakPoints.small}px) {
    font-size: ${fontSize.medium}px;
  }
`;

const SectionLabel = styled.div`
  margin-bottom: ${4 * BASE_UNIT}px;
  font-size: ${fontSize.xmedium}px;
  font-weight: ${fontWeight.semibold};
  color: ${colors.outerSpace};

  @media (max-width: ${breakPoints.medium}px) {
    font-size: ${fontSize.medium}px;
  }

  @media (max-width: ${breakPoints.small}px) {
    font-size: ${fontSize.normal}px;
  }
`;

const SectionDescription = styled.div`
  font-size: ${fontSize.medium}px;
  line-height: ${lineHeight.SectionDescription};
  color: ${colors.ebony};

  @media (max-width: ${breakPoints.small}px) {
    font-size: ${fontSize.normal}px;
  }
`;

const Link = styled.a`
  color: ${colors.dodgerBlue};
  font-weight: ${fontWeight.semibold};
  text-transform: none;
  text-decoration: none;

  &:hover {
    color: ${hoverColors.dodgerBlue};
    transition: background-color 0.5s ease;
  }
`;

type Props = {|
  setCreationsRef: () => void
|};

const Creations = ({ setCreationsRef }: Props) => (
  <Panel
    minHeight={PANEL_MIN_HEIGHT}
    isCentered
    paddingTop={`${15 * BASE_UNIT}px`}
    paddingRight={`${15 * BASE_UNIT}px`}
    paddingBottom={`${15 * BASE_UNIT}px`}
    paddingLeft={`${15 * BASE_UNIT}px`}
  >
    <Fade delay={FADE_DELAY}>
      <PanelWrapper>
        <HumanVsComputer />
        <Section>
          <SectionTitle>Chess AI</SectionTitle>
          <SectionLabel>MiniMax Algorithm</SectionLabel>
          <SectionDescription>
            Having always loved Chess, I decided to see what tools were
            available to me to build my very own Chess playing app. Try moving a
            piece above to start a game! Careful though, it can see two moves
            ahead.
          </SectionDescription>
        </Section>
      </PanelWrapper>
    </Fade>
  </Panel>
);

export default Creations;
