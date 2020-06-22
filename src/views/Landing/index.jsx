// @flow
import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import Lottie from 'react-lottie';

import Panel, { Column } from 'components/Panel';
import Media from 'components/Media';
import Separator from 'components/Separator';
import SocialIcon, { SocialIconWrapper } from 'components/SocialIcon';
// $FlowFixMe
import selfPortrait from 'assets/self-portrait.jpeg';
import paintRoller from 'assets/paint-roller.json';
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
const BACKGROUND_COLORS = [
  colors.geraldine,
  colors.malibu,
  colors.emerald,
  colors.lavendarPurple
];

const BackgroundImage = styled.div(props => ({
  width: '100%',
  height: '100%',
  backgroundImage: `url(${props.url})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%'
}));

const Description = styled.div`
  font-size: ${fontSize.medium}px;
  line-height: ${lineHeight.description};
  color: ${colors.white};
`;

const Subtitle = styled.div`
  font-size: ${fontSize.medium}px;
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

  @media (max-width: ${breakPoints.small}px) {
    font-size: ${fontSize.large}px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const PaintRoller = styled.div`
  position: fixed;
  top: 32px;
  right: 32px;
  cursor: pointer;
`;

const InfoColumn = () => (
  <Wrapper>
    <Fade bottom delay={FADE_DELAY} duration={FADE_DURATION}>
      <Subtitle>Hi there,</Subtitle>
    </Fade>
    <Separator size={10} />
    <Fade delay={FADE_DELAY + FADE_DURATION} duration={FADE_DURATION}>
      <Title>
        I'm Richard — a frontend developer living in Sydney, Australia working
        at Mathspace.
      </Title>
    </Fade>
    <Separator size={8} />
    <Fade delay={FADE_DELAY + 2 * FADE_DURATION}>
      <Description>
        I come up with wacky ideas. Then I make them happen.
      </Description>
      <Separator size={10} />
      <SocialIconWrapper>
        <SocialIcon url={urls.mailTo} />
        <SocialIcon url={urls.linkedIn} />
        <SocialIcon url={urls.github} />
        <SocialIcon url={urls.medium} />
        <SocialIcon url={urls.instagram} />
      </SocialIconWrapper>
    </Fade>
  </Wrapper>
);

const Landing = () => {
  const [backgroundColorIndex, setBackgroundColorIndex] = React.useState(0);
  const defaultPaintRollerOptions = {
    loop: true,
    autoplay: true,
    animationData: paintRoller,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Panel>
      <PaintRoller
        onClick={() =>
          setBackgroundColorIndex(b =>
            b < BACKGROUND_COLORS.length - 1 ? b + 1 : 0
          )
        }
      >
        <Lottie
          options={defaultPaintRollerOptions}
          height={40}
          width={40}
          isClickToPauseDisabled={true}
        />
      </PaintRoller>
      <Media query={`(min-width: ${breakPoints.large}px)`}>
        {isDesktopView =>
          isDesktopView ? (
            <React.Fragment>
              <Column width="50%" height="100vh" padding={0}>
                <BackgroundImage url={selfPortrait} />
              </Column>
              <Column
                width="50%"
                height="100vh"
                padding={25 * BASE_UNIT}
                backgroundColor={BACKGROUND_COLORS[backgroundColorIndex]}
              >
                <InfoColumn />
              </Column>
            </React.Fragment>
          ) : (
            <Column
              width="100%"
              height="100vh"
              padding={20 * BASE_UNIT}
              backgroundColor={BACKGROUND_COLORS[backgroundColorIndex]}
            >
              <InfoColumn />
            </Column>
          )
        }
      </Media>
    </Panel>
  );
};

export default Landing;
