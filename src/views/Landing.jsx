// @flow
import React from 'react';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';
import styled from 'styled-components';

import Canvas from 'components/Canvas';
import Panel, { Column } from 'components/Panel';
import Media from 'components/Media';
import Separator from 'components/Separator';
import SocialIcon, { SocialIcons } from 'components/SocialIcon';
// $FlowFixMe
import selfPortrait from 'assets/self-portrait.jpeg';
import eraser from 'assets/eraser.svg';
import paintBrush from 'assets/paint_brush.svg';
import {
  BASE_UNIT,
  borderRadius,
  boxShadow,
  breakPoints,
  colors,
  fontSize,
  fontWeight,
  lineHeight,
  zIndex
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
  color: ${props => props.color || colors.honorNight};
`;

const Subtitle = styled.div`
  padding: 8px 12px;
  background-color: ${colors.white};
  width: fit-content;
  box-shadow: ${boxShadow};
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

const IMAGE_SIZE = 40;
const IMAGE_GUTTER = 32;

const Image = styled.img(props => ({
  position: 'absolute',
  top: IMAGE_GUTTER,
  right: props.right,
  height: IMAGE_SIZE,
  width: IMAGE_SIZE,
  cursor: 'pointer',
  zIndex: zIndex.ctas,
  transition: 'top 0.25s ease',

  '&:hover': {
    top: 27
  }
}));

const InfoColumn = () => (
  <Wrapper>
    <Tada bottom delay={FADE_DELAY} duration={FADE_DURATION}>
      <Subtitle>Hi there</Subtitle>
    </Tada>
    <Separator size={10} />
    <Title>
      <Fade delay={FADE_DELAY + FADE_DURATION} duration={FADE_DURATION} bottom>
        I'm Richard — a fullstack
      </Fade>
      <Fade
        delay={FADE_DELAY + FADE_DURATION + 50}
        duration={FADE_DURATION}
        bottom
      >
        engineer living in Sydney,
      </Fade>
      <Fade
        delay={FADE_DELAY + FADE_DURATION + 100}
        duration={FADE_DURATION}
        bottom
      >
        Australia working at RangeMe.
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
  const canvasRef = React.useRef(null);
  const [backgroundColorIndex, setBackgroundColorIndex] = React.useState(0);

  function incrementBackgroundColor() {
    setBackgroundColorIndex(b =>
      b < BACKGROUND_COLORS.length - 1 ? b + 1 : 0
    );
  }

  function getBackgroundColor() {
    return BACKGROUND_COLORS[backgroundColorIndex];
  }

  const clearCanvas = () => {
    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <React.Fragment>
      <Media query={`(min-width: ${breakPoints.large}px)`}>
        {isDesktopView =>
          isDesktopView ? (
            <Image
              src={eraser}
              right={IMAGE_GUTTER + IMAGE_SIZE + 16}
              onClick={clearCanvas}
            />
          ) : null
        }
      </Media>
      <Image
        src={paintBrush}
        right={IMAGE_GUTTER}
        onClick={incrementBackgroundColor}
      />
      <Panel backgroundColor={getBackgroundColor()}>
        <Media query={`(min-width: ${breakPoints.large}px)`}>
          {isDesktopView =>
            isDesktopView ? (
              <React.Fragment>
                <Column width="50%" height="100%" padding={25 * BASE_UNIT}>
                  <InfoColumn />
                </Column>
                <Column width="50%" height="100%" padding={0}>
                  <Description
                    color={colors.white}
                    style={{
                      position: 'fixed',
                      right: 16,
                      bottom: 16
                    }}
                  >
                    Click to draw on me!
                  </Description>
                  <BackgroundImage url={selfPortrait} />
                </Column>
                <Canvas
                  canvasRef={canvasRef}
                  strokeColor={getBackgroundColor()}
                  height={window.innerHeight}
                  width={window.innerWidth / 2}
                  left={window.innerWidth / 2}
                />
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
