import React, { useState } from 'react';
import styled from 'styled-components';
import Panel from '../../../components/Panel';
import {
  UniversityOfSydneyMiniCard,
  UniversityOfSydneyCard
} from './UniversityOfSydney';
import { S4SMiniCard, S4SCard } from './S4S';
import { SMASHMiniCard, SMASHCard } from './SMASH';
import { BInspiringMiniCard, BInspiringCard } from './BInspiring';
import { KPMGMiniCard, KPMGCard } from './KPMG';
import { MathspaceMiniCard, MathspaceCard } from './Mathspace';
import { PANEL_MIN_HEIGHT } from '../.';
import { BASE_UNIT, breakPoints, colors } from '../../../utils/themes.jsx';

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
    </Panel>
  );
};

export default Journey;
