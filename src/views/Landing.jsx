// @flow
import React from 'react';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';
import styled from 'styled-components';
import Lottie from 'react-lottie';

import Panel, { Column } from 'components/Panel';
import Media from 'components/Media';
import Separator from 'components/Separator';
import SocialIcon, { SocialIcons } from 'components/SocialIcon';
// $FlowFixMe
import selfPortrait from 'assets/self-portrait.jpeg';
import paintRoller from 'assets/paint_roller.json';
import {
  BASE_UNIT,
  borderRadius,
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
  colors.cupid,
  colors.sail,
  colors.iceCold,
  colors.dairyCream
];

const BackgroundImage = styled.div(props => ({
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${props.url})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%'
}));

const Description = styled.div`
  font-size: ${fontSize.medium}px;
  line-height: ${lineHeight.description};
  color: ${colors.honorNight};
`;

const Subtitle = styled.div`
  padding: 8px 12px;
  background-color: ${colors.white};
  width: fit-content;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: ${borderRadius.regular}px;
  font-weight: ${fontWeight.semibold};
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.description};
  color: ${colors.dodgerBlue};
  text-transform: uppercase;
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.div`
  display: ${props => props.isCentered && 'flex'};
  justify-content: ${props => props.isCentered && 'center'};
  font-weight: ${fontWeight.semibold};
  font-size: ${fontSize.xxlarge}px;
  line-height: ${lineHeight.title};
  color: ${colors.honorNight};

  @media (max-width: ${breakPoints.small}px) {
    font-size: ${fontSize.large}px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  user-select: none;
`;

const PaintRoller = styled.div`
  position: fixed;
  top: 32px;
  right: 32px;
  cursor: pointer;
`;

const InfoColumn = () => (
  <Wrapper>
    <Tada bottom delay={FADE_DELAY} duration={FADE_DURATION}>
      <Subtitle>Hi there</Subtitle>
    </Tada>
    <Separator size={10} />
    <Title>
      <Fade delay={FADE_DELAY + FADE_DURATION} duration={FADE_DURATION} bottom>
        I'm Richard — a frontend
      </Fade>
      <Fade
        delay={FADE_DELAY + FADE_DURATION + 50}
        duration={FADE_DURATION}
        bottom
      >
        developer living in Sydney,
      </Fade>
      <Fade
        delay={FADE_DELAY + FADE_DURATION + 100}
        duration={FADE_DURATION}
        bottom
      >
        Australia working at Mathspace.
      </Fade>
    </Title>
    <Separator size={8} />
    <Fade delay={FADE_DELAY + 2 * FADE_DURATION} bottom>
      <Description>
        I come up with wacky ideas. Then I make them happen.
      </Description>
    </Fade>
    <Fade delay={FADE_DELAY + 3 * FADE_DURATION}>
      <Separator size={10} />
      <SocialIcons>
        <SocialIcon url={urls.mailTo} />
        <SocialIcon url={urls.linkedIn} />
        <SocialIcon url={urls.github} />
        <SocialIcon url={urls.medium} />
        <SocialIcon url={urls.instagram} />
      </SocialIcons>
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
    <React.Fragment>
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
      <Panel backgroundColor={BACKGROUND_COLORS[backgroundColorIndex]}>
        <Media query={`(min-width: ${breakPoints.large}px)`}>
          {isDesktopView =>
            isDesktopView ? (
              <React.Fragment>
                <Column width="50%" height="100%" padding={0}>
                  <BackgroundImage url={selfPortrait} />
                </Column>
                <Column width="50%" height="100%" padding={25 * BASE_UNIT}>
                  <InfoColumn />
                </Column>
              </React.Fragment>
            ) : (
              <Column width="100%" height="100%" padding={20 * BASE_UNIT}>
                <InfoColumn />
              </Column>
            )
          }
        </Media>
      </Panel>
    </React.Fragment>
  );
};

export default Landing;
