import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import Panel from '../../../components/Panel';
import HumanVsComputer from '../../../components/HumanVsComputer';
import {
  BASE_UNIT,
  breakPoints,
  colors,
  fontSize,
  fontWeight,
  lineHeight
} from '../../../utils/themes.jsx';

const FADE_DELAY = 300;

const PanelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: -150px;

  @media (max-width: ${breakPoints.large}px) {
    margin-right: 0;
  }

  @media (max-width: ${breakPoints.medium}px) {
    flex-direction: column;
    margin-right: 0;
  }
`;

const Section = styled.div`
  text-align: left;
  margin-left: ${20 * BASE_UNIT}px;
  max-width: 425px;

  @media (max-width: ${breakPoints.medium}px) {
    margin-left: 0;
    margin-top: ${8 * BASE_UNIT}px;
    text-align: center;
  }
`;

const SectionTitle = styled.div`
  margin-bottom: ${4 * BASE_UNIT}px;
  font-size: ${fontSize.xxlarge}px;
  font-weight: ${fontWeight.bold};
  color: ${colors.saffron};

  @media (max-width: ${breakPoints.small}px) {
    font-size: ${fontSize.xlarge}px;
  }
`;

const SectionLabel = styled.div`
  margin-bottom: ${2 * BASE_UNIT}px;
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.semibold};
  color: ${colors.athensGrey};
  text-transform: uppercase;

  @media (max-width: ${breakPoints.medium}px) {
    font-size: ${fontSize.medium}px;
  }

  @media (max-width: ${breakPoints.small}px) {
    font-size: ${fontSize.normal}px;
  }
`;

const SectionDescription = styled.div`
  font-size: ${fontSize.medium}px;
  line-height: ${lineHeight.description};
  color: ${colors.athensGrey};

  @media (max-width: ${breakPoints.small}px) {
    display: none;
  }
`;

type Props = {|
  setCreationsRef: () => void
|};

const Creations = ({ setCreationsRef }: Props) => (
  <Panel
    isCenteredVertically
    isCenteredHorizontally
    paddingRight={15 * BASE_UNIT}
    paddingLeft={15 * BASE_UNIT}
    backgroundColor={colors.mirage}
  >
    <Fade delay={FADE_DELAY}>
      <PanelWrapper>
        <HumanVsComputer />
        <Section>
          <SectionLabel>Creation 01</SectionLabel>
          <SectionTitle>Chess AI</SectionTitle>
          <SectionDescription>
            Having always loved the game of chess, I decided to see what tools
            were available to me to build my very own chess playing app. Try
            moving a piece to start a game! Careful though, it can see two moves
            ahead.
          </SectionDescription>
        </Section>
      </PanelWrapper>
    </Fade>
  </Panel>
);

export default Creations;
