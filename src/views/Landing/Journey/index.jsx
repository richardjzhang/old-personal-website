import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import Panel from '../../../components/Panel';
import {
  RightCard as EmptyRightCard,
  LeftCard as EmptyLeftCard
} from '../../../components/Card/EmptyCard';
import {
  UniversityOfSydneyMiniCard,
  UniversityOfSydneyCard
} from './UniversityOfSydneyCards';
import { S4SMiniCard, S4SCard } from './S4SCards';
import { SMASHMiniCard, SMASHCard } from './SmashCards';
import { BInspiringMiniCard, BInspiringCard } from './BInspiringCards';
import { KPMGMiniCard, KPMGCard } from './KpmgCards';
import { MathspaceMiniCard, MathspaceCard } from './MathspaceCards';
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

export const FADE_DELAY = 300;
const PANEL_SPACING = 14 * BASE_UNIT;

const MiniPanelWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap ${6 * BASE_UNIT}px;
  color: ${colors.tropicalBlue};

  @media (min-width: ${breakPoints.medium}px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: ${8 * BASE_UNIT}px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${8 * BASE_UNIT}px;
  padding: ${3 * BASE_UNIT}px ${2 * BASE_UNIT}px;
  background-color: ${colors.mountainMeadow};
  width: 150px;
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

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Spacing = styled.div`
  position: relative;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
`;

type Props = {|
  setJourneyRef: () => void
|};

const Journey = ({ setJourneyRef }: Props) => {
  const [isCardOpen, setCardOpen] = useState({ card: null, direction: null });
  const cardAction = (card: ?string, direction: ?string) => {
    setCardOpen({ card, direction });
    setJourneyRef();
  };
  return (
    <Panel
      minHeight={PANEL_MIN_HEIGHT}
      backgroundColor={colors.vulcan}
      isCentered
      paddingTop={`${PANEL_SPACING}px`}
      paddingRight={`${PANEL_SPACING}px`}
      paddingBottom={`${PANEL_SPACING}px`}
      paddingLeft={`${PANEL_SPACING}px`}
    >
      {isCardOpen.card == null && (
        <MiniPanelWrapper>
          <MathspaceMiniCard onClick={() => cardAction('Mathspace', 'top')} />
          <UniversityOfSydneyMiniCard
            onClick={() => cardAction('University of Sydney', 'top')}
          />
          <S4SMiniCard onClick={() => cardAction('S4S', 'top')} />
          <KPMGMiniCard onClick={() => cardAction('KPMG', 'top')} />
          <BInspiringMiniCard
            onClick={() => cardAction('B.Inspiring', 'top')}
          />
          <SMASHMiniCard onClick={() => cardAction('SMASH', 'top')} />
        </MiniPanelWrapper>
      )}
      {isCardOpen.card === 'Mathspace' && (
        <CardWrapper>
          <Spacing>
            <MathspaceCard direction={isCardOpen.direction} />
          </Spacing>

          <EmptyRightCard
            spacing={PANEL_SPACING}
            onClick={() => cardAction('University of Sydney', 'right')}
          />
        </CardWrapper>
      )}
      {isCardOpen.card === 'University of Sydney' && (
        <CardWrapper>
          <EmptyLeftCard
            spacing={PANEL_SPACING}
            onClick={() => cardAction('Mathspace', 'left')}
          />

          <Spacing>
            <UniversityOfSydneyCard direction={isCardOpen.direction} />
          </Spacing>

          <EmptyRightCard
            spacing={PANEL_SPACING}
            onClick={() => cardAction('S4S', 'right')}
          />
        </CardWrapper>
      )}
      {isCardOpen.card === 'S4S' && (
        <CardWrapper>
          <EmptyLeftCard
            spacing={PANEL_SPACING}
            onClick={() => cardAction('University of Sydney', 'left')}
          />

          <Spacing>
            <S4SCard direction={isCardOpen.direction} />
          </Spacing>

          <EmptyRightCard
            spacing={PANEL_SPACING}
            onClick={() => cardAction('KPMG', 'right')}
          />
        </CardWrapper>
      )}
      {isCardOpen.card === 'KPMG' && (
        <CardWrapper>
          <EmptyLeftCard
            spacing={PANEL_SPACING}
            onClick={() => cardAction('S4S', 'left')}
          />

          <Spacing>
            <KPMGCard direction={isCardOpen.direction} />
          </Spacing>

          <EmptyRightCard
            spacing={PANEL_SPACING}
            onClick={() => cardAction('B.Inspiring', 'right')}
          />
        </CardWrapper>
      )}
      {isCardOpen.card === 'B.Inspiring' && (
        <CardWrapper>
          <EmptyLeftCard
            spacing={PANEL_SPACING}
            onClick={() => cardAction('KPMG', 'left')}
          />

          <Spacing>
            <BInspiringCard direction={isCardOpen.direction} />
          </Spacing>

          <EmptyRightCard
            spacing={PANEL_SPACING}
            onClick={() => cardAction('SMASH', 'right')}
          />
        </CardWrapper>
      )}
      {isCardOpen.card === 'SMASH' && (
        <CardWrapper>
          <EmptyLeftCard
            spacing={PANEL_SPACING}
            onClick={() => cardAction('B.Inspiring', 'left')}
          />

          <Spacing>
            <SMASHCard direction={isCardOpen.direction} />
          </Spacing>
        </CardWrapper>
      )}
      {isCardOpen.card != null && (
        <Fade delay={FADE_DELAY}>
          <Button onClick={() => cardAction(null, null)}>See all</Button>
        </Fade>
      )}
    </Panel>
  );
};

export default Journey;
