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

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Spacing = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

type Props = {|
  setJourneyRef: () => void
|};

const Journey = ({ setJourneyRef }: Props) => {
  const [isCardOpen, setCardOpen] = useState(null);
  const cardAction = (card: ?string) => {
    setCardOpen(card);
    setJourneyRef();
  };
  return (
    <Panel
      minHeight={PANEL_MIN_HEIGHT}
      backgroundColor={colors.dodgerBlue}
      isCentered
      paddingTop={`${PANEL_SPACING}px`}
      paddingRight={`${PANEL_SPACING}px`}
      paddingBottom={`${PANEL_SPACING}px`}
      paddingLeft={`${PANEL_SPACING}px`}
    >
      {isCardOpen == null && (
        <MiniPanelWrapper>
          <MathspaceMiniCard onClick={() => cardAction('Mathspace')} />
          <UniversityOfSydneyMiniCard
            onClick={() => cardAction('University of Sydney')}
          />
          <S4SMiniCard onClick={() => cardAction('S4S')} />
          <KPMGMiniCard onClick={() => cardAction('KPMG')} />
          <BInspiringMiniCard onClick={() => cardAction('B.Inspiring')} />
          <SMASHMiniCard onClick={() => cardAction('SMASH')} />
        </MiniPanelWrapper>
      )}
      {isCardOpen === 'Mathspace' && (
        <CardWrapper>
          <Spacing>
            <MathspaceCard />
          </Spacing>
          <Fade delay={FADE_DELAY}>
            <EmptyRightCard
              spacing={PANEL_SPACING}
              onClick={() => cardAction('University of Sydney')}
            />
          </Fade>
        </CardWrapper>
      )}
      {isCardOpen === 'University of Sydney' && (
        <CardWrapper>
          <Fade delay={FADE_DELAY}>
            <EmptyLeftCard
              spacing={PANEL_SPACING}
              onClick={() => cardAction('Mathspace')}
            />
          </Fade>
          <Spacing>
            <UniversityOfSydneyCard />
          </Spacing>
          <Fade delay={FADE_DELAY}>
            <EmptyRightCard
              spacing={PANEL_SPACING}
              onClick={() => cardAction('S4S')}
            />
          </Fade>
        </CardWrapper>
      )}
      {isCardOpen === 'S4S' && (
        <CardWrapper>
          <Fade delay={FADE_DELAY}>
            <EmptyLeftCard
              spacing={PANEL_SPACING}
              onClick={() => cardAction('University of Sydney')}
            />
          </Fade>
          <Spacing>
            <S4SCard />
          </Spacing>
          <Fade delay={FADE_DELAY}>
            <EmptyRightCard
              spacing={PANEL_SPACING}
              onClick={() => cardAction('KPMG')}
            />
          </Fade>
        </CardWrapper>
      )}
      {isCardOpen === 'KPMG' && (
        <CardWrapper>
          <Fade delay={FADE_DELAY}>
            <EmptyLeftCard
              spacing={PANEL_SPACING}
              onClick={() => cardAction('S4S')}
            />
          </Fade>
          <Spacing>
            <KPMGCard />
          </Spacing>
          <Fade delay={FADE_DELAY}>
            <EmptyRightCard
              spacing={PANEL_SPACING}
              onClick={() => cardAction('B.Inspiring')}
            />
          </Fade>
        </CardWrapper>
      )}
      {isCardOpen === 'B.Inspiring' && (
        <CardWrapper>
          <Fade delay={FADE_DELAY}>
            <EmptyLeftCard
              spacing={PANEL_SPACING}
              onClick={() => cardAction('KPMG')}
            />
          </Fade>
          <Spacing>
            <BInspiringCard />
          </Spacing>
          <Fade delay={FADE_DELAY}>
            <EmptyRightCard
              spacing={PANEL_SPACING}
              onClick={() => cardAction('SMASH')}
            />
          </Fade>
        </CardWrapper>
      )}
      {isCardOpen === 'SMASH' && (
        <CardWrapper>
          <Fade delay={FADE_DELAY}>
            <EmptyLeftCard
              spacing={PANEL_SPACING}
              onClick={() => cardAction('B.Inspiring')}
            />
          </Fade>
          <Spacing>
            <SMASHCard />
          </Spacing>
        </CardWrapper>
      )}
      {isCardOpen != null && (
        <Fade delay={FADE_DELAY}>
          <Button onClick={() => cardAction(null)}>See all</Button>
        </Fade>
      )}
    </Panel>
  );
};

export default Journey;
