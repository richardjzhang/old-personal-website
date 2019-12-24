// @flow
import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import Panel, { Column } from 'components/Panel';
import Media from 'components/Media';
import SocialIcon from 'components/SocialIcon';
// $FlowFixMe
import self_portrait from 'static/self_portrait.jpeg';
import {
  BASE_UNIT,
  breakPoints,
  colors,
  fontSize,
  fontWeight,
  lineHeight
} from 'utils/themes';
import { urls } from 'utils/urls';

const FADE_DELAY = 500;
const FADE_DURATION = 1000;

const BackgroundImage = styled.div(props => ({
  width: '100%',
  height: '100%',
  backgroundImage: `url(${props.url})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%'
}));

const Description = styled.div(props => ({
  fontSize: fontSize.xmedium,
  lineHeight: lineHeight.description,
  color: colors.white
}));

const IconWrapper = styled.div`
  display: flex;
`;

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Separator = styled.div(props => ({
  flexShrink: 0,
  ...(props.xSmall
    ? {
        height: 4 * BASE_UNIT,
        width: 4 * BASE_UNIT
      }
    : {}),
  ...(props.small
    ? {
        height: 6 * BASE_UNIT,
        width: 6 * BASE_UNIT
      }
    : {}),
  ...(props.medium
    ? {
        height: 8 * BASE_UNIT,
        width: 8 * BASE_UNIT
      }
    : {}),
  ...(props.large
    ? {
        height: 10 * BASE_UNIT,
        width: 10 * BASE_UNIT
      }
    : {})
}));

const Subtitle = styled.div`
  font-size: ${fontSize.normal};
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.description};
  color: ${colors.cloudBurst};
  text-transform: uppercase;
`;

const Title = styled.div`
  font-size: ${fontSize.xxlarge}px;
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.title};
  color: ${colors.white};
`;

const InfoColumn = () => (
  <SecondColumn>
    <Fade bottom delay={FADE_DELAY} duration={FADE_DURATION}>
      <Subtitle>Hi there,</Subtitle>
    </Fade>
    <Separator large />
    <Fade delay={FADE_DELAY + FADE_DURATION} duration={FADE_DURATION}>
      <Title>
        I'm Richard - a frontend engineer living in Sydney, Australia working at
        Mathspace.
      </Title>
    </Fade>
    <Separator medium />
    <Fade delay={FADE_DELAY + 2 * FADE_DURATION}>
      <Description>
        I come up with wacky ideas. Then I make them happen.
      </Description>
      <Separator large />
      <IconWrapper>
        <SocialIcon url={urls.mailTo} />
        <Separator xSmall />
        <SocialIcon url={urls.linkedIn} />
        <Separator xSmall />
        <SocialIcon url={urls.github} />
        <Separator xSmall />
        <SocialIcon url={urls.medium} />
        <Separator xSmall />
        <SocialIcon url={urls.instagram} />
      </IconWrapper>
    </Fade>
  </SecondColumn>
);

const Landing = () => (
  <Media query={`(min-width: ${breakPoints.large}px)`}>
    {isDesktopView =>
      isDesktopView ? (
        <Panel>
          <Column width="50%" height="100vh" padding={0}>
            <BackgroundImage url={self_portrait} />
          </Column>
          <Column
            width="50%"
            height="100vh"
            padding={25 * BASE_UNIT}
            backgroundColor={colors.geraldine}
          >
            <InfoColumn />
          </Column>
        </Panel>
      ) : (
        <Panel>
          <Column
            width="100%"
            height="100vh"
            padding={25 * BASE_UNIT}
            backgroundColor={colors.geraldine}
          >
            <InfoColumn />
          </Column>
        </Panel>
      )
    }
  </Media>
);

export default Landing;
