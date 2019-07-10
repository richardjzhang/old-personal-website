import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import Panel from '../../../components/Panel';
import {
  UniversityOfSydneyMiniCard,
  UniversityOfSydneyCard
} from './UniversityOfSydney';
import { S4SMiniCard, S4SCard } from './S4S.jsx';
import { SMASHMiniCard, SMASHCard } from './Smash.jsx';
import { BInspiringMiniCard, BInspiringCard } from './BInspiring.jsx';
import { KPMGMiniCard, KPMGCard } from './Kpmg.jsx';
import { MathspaceMiniCard, MathspaceCard } from './Mathspace.jsx';
import { PANEL_MIN_HEIGHT } from '../.';
import {
  BASE_UNIT,
  boxShadow,
  breakPoints,
  colors,
  hoverColors,
  fontSize,
  fontWeight,
  borderRadius
} from '../../../utils/themes.jsx';

export const FADE_DELAY = 400;

const MiniPanelWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap ${8 * BASE_UNIT}px;
  color: ${colors.tropicalBlue};

  @media (min-width: ${breakPoints.medium}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${8 * BASE_UNIT}px;
  padding: ${2 * BASE_UNIT}px ${4 * BASE_UNIT}px;
  background-color: ${colors.mountainMeadow};
  width: 175px;
  font-size: ${fontSize.normal}px;
  font-weight: ${fontWeight.light};
  text-align: center;
  border-radius: ${borderRadius.regular}px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  color: ${colors.white};
  box-shadow: ${boxShadow};

  &:hover {
    background-color: ${hoverColors.mountainMeadow};
    transition: background-color 0.5s ease;
  }
`;

const Journey = () => {
  const [isCardOpen, setCardOpen] = useState(null);
  return (
    <Panel
      minHeight={PANEL_MIN_HEIGHT}
      backgroundColor={colors.dodgerBlue}
      isCentered
      paddingTop={`${14 * BASE_UNIT}px`}
      paddingRight={`${14 * BASE_UNIT}px`}
      paddingBottom={`${14 * BASE_UNIT}px`}
      paddingLeft={`${14 * BASE_UNIT}px`}
    >
      {isCardOpen == null && (
        <MiniPanelWrapper>
          <UniversityOfSydneyMiniCard
            onClick={() => setCardOpen('University of Sydney')}
          />
          <S4SMiniCard onClick={() => setCardOpen('S4S')} />
          <SMASHMiniCard onClick={() => setCardOpen('SMASH')} />
          <BInspiringMiniCard onClick={() => setCardOpen('B.Inspiring')} />
          <KPMGMiniCard onClick={() => setCardOpen('KPMG')} />
          <MathspaceMiniCard onClick={() => setCardOpen('Mathspace')} />
        </MiniPanelWrapper>
      )}
      {isCardOpen === 'University of Sydney' && <UniversityOfSydneyCard />}
      {isCardOpen === 'S4S' && <S4SCard />}
      {isCardOpen === 'SMASH' && <SMASHCard />}
      {isCardOpen === 'B.Inspiring' && <BInspiringCard />}
      {isCardOpen === 'KPMG' && <KPMGCard />}
      {isCardOpen === 'Mathspace' && <MathspaceCard />}
      {isCardOpen != null && (
        <Fade delay={FADE_DELAY}>
          <Button onClick={() => setCardOpen(null)}>See all</Button>
        </Fade>
      )}
    </Panel>
  );
};

export default Journey;
