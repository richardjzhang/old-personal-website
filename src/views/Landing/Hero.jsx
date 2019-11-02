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

import { FADE_DELAY, Image } from './styles';

const Title = styled.div`
  font-size: ${fontSize.xxlarge}px;
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.title};
  color: ${colors.athensGrey};
`;

const Description = styled.div`
  font-size: ${fontSize.xmedium}px;
  line-height: ${lineHeight.description};
  color: ${colors.porcelain};
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
        <Fade right delay={FADE_DELAY}>
          <Title>Hey!</Title>
          <Title>I'm Richard.</Title>
        </Fade>
        <Separator small />
        <Fade delay={3 * FADE_DELAY}>
          <Description>I come up with wacky ideas.</Description>
          <Description>Then I make them happen.</Description>
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
