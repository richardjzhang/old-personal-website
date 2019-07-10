import React from 'react';
import styled from 'styled-components';
import Panel from '../../../components/Panel';
import {
  UniversityOfSydneyMiniCard,
  UniversityOfSydneyCard
} from './UniversityOfSydney';
import { S4SMiniCard, S4SCard } from './S4S';
import { SmashMiniCard, SmashCard } from './Smash';
import { BInspiringMiniCard, BInspiringCard } from './BInspiring';
import { KPMGMiniCard, KPMGCard } from './KPMG';
import { MathspaceMiniCard, MathspaceCard } from './Mathspace';
import { PANEL_MIN_HEIGHT } from '../.';
import { BASE_UNIT, breakPoints, colors } from '../../../utils/themes.jsx';

export const FADE_DELAY = 400;

const PanelWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap ${8 * BASE_UNIT}px;
  color: ${colors.tropicalBlue};

  @media (min-width: ${breakPoints.medium}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Journey = () => (
  <Panel
    minHeight={PANEL_MIN_HEIGHT}
    backgroundColor={colors.dodgerBlue}
    isCentered
    paddingTop={`${14 * BASE_UNIT}px`}
    paddingRight={`${14 * BASE_UNIT}px`}
    paddingBottom={`${14 * BASE_UNIT}px`}
    paddingLeft={`${14 * BASE_UNIT}px`}
  >
    <PanelWrapper>
      <UniversityOfSydneyMiniCard />
      <S4SMiniCard />
      <SmashMiniCard />
      <BInspiringMiniCard />
      <KPMGMiniCard />
      <MathspaceMiniCard />
    </PanelWrapper>
  </Panel>
);

export default Journey;
