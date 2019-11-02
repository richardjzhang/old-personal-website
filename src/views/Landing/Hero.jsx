// @flow
import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import Panel, {
  ColumnWrapper as Wrapper,
  Column,
  ColumnSeparator
} from 'components/Panel';
import { BASE_UNIT, colors, fontSize, fontWeight } from 'utils/themes';
import camp_fire from 'static/camp_fire.svg';

const HeroImage = styled.img`
  width: 100%;
`;

const Title = styled.div`
  font-size: ${fontSize.xxlarge}px;
  font-weight: ${fontWeight.bold};
  line-height: 1.25;
  color: ${colors.athensGrey};
`;

const Description = styled.div`
  display: inline-flex;
  margin-top: ${6 * BASE_UNIT}px;
  font-size: ${fontSize.xmedium}px;
  line-height: 1.4;
  color: ${colors.porcelain};
`;

const Separator = styled.div`
  flex-shrink: 0;
  width: ${10 * BASE_UNIT}px;
  height: ${10 * BASE_UNIT}px;
`;

const Hero = () => (
  <Panel isCenteredVertically isPositionRelative>
    <Wrapper>
      <Column width="30%">
        <Fade right delay={500}>
          <Title>Hey!</Title>
          <Title>I'm Richard.</Title>
        </Fade>
        <Fade delay={1500}>
          <Description>
            I come up with wacky ideas. Then I make them happen.
          </Description>
        </Fade>
        <Separator />
      </Column>
      <ColumnSeparator />
      <Column width="70%">
        <HeroImage src={camp_fire} alt="HeroImage" />
      </Column>
    </Wrapper>
  </Panel>
);

export default Hero;
