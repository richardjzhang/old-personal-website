// @flow
import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import Panel, {
  ColumnWrapper as Wrapper,
  Column,
  ColumnSeparator
} from 'components/Panel';
import {
  BASE_UNIT,
  colors,
  fontSize,
  fontWeight,
  lineHeight
} from 'utils/themes';
import camp_fire from 'static/camp_fire.svg';

import { FADE_DELAY, FADE_DURATION, Image, Description } from './styles';

// Only shows up after second title has appeared and finished transition
const DESCRIPTION_FADE_DELAY = 1.5 * FADE_DELAY + FADE_DURATION;

const Title = styled.div`
  font-size: ${fontSize.xxxlarge}px;
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.title};
  color: ${colors.white};
`;

const Separator = styled.div(props => ({
  flexShrink: 0,
  ...(props.small
    ? {
        height: 6 * BASE_UNIT,
        width: 6 * BASE_UNIT
      }
    : {}),
  ...(props.large
    ? {
        height: 10 * BASE_UNIT,
        width: 10 * BASE_UNIT
      }
    : {})
}));

const Hero = () => (
  <Panel minHeight="100vh">
    <Wrapper>
      <Column width="30%">
        <Fade bottom delay={FADE_DELAY} duration={FADE_DURATION}>
          <Title>Hey!</Title>
        </Fade>
        <Fade bottom delay={1.5 * FADE_DELAY} duration={FADE_DURATION}>
          <Title>I'm Richard</Title>
        </Fade>
        <Separator small />
        <Fade delay={DESCRIPTION_FADE_DELAY}>
          <Description theme="light">I come up with wacky ideas.</Description>
          <Description theme="light">Then I make them happen.</Description>
        </Fade>
        <Separator large />
      </Column>
      <ColumnSeparator />
      <Column width="70%">
        <Fade delay={FADE_DELAY}>
          <Image src={camp_fire} alt="hero" />
        </Fade>
      </Column>
    </Wrapper>
  </Panel>
);

export default Hero;
