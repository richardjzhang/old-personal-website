// @flow
import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import Canvas from 'components/Canvas';
import Panel, { Column } from 'components/Panel';
import Media from 'components/Media';
import Separator from 'components/Separator';
import SocialIcon, { SocialIcons } from 'components/SocialIcon';
// $FlowFixMe
import selfPortrait from 'assets/self-portrait.jpeg';
import trash from 'assets/trash.svg';
import paintBrush from 'assets/paint_brush_1.svg';
import canvasBrush from 'assets/paint_brush_2.svg';
import colorSelector from 'assets/colors.svg';
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

const FADE_DELAY = 300;
const FADE_DURATION = 1000;
const BACKGROUND_COLORS = [
  colors.dairyCream,
  colors.spearmint,
  colors.roseQuartz,
  colors.pewter
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
  font-size: ${fontSize.xlarge}px;
  line-height: ${lineHeight.description};
  color: ${colors.honorNight};

  @media (max-width: ${breakPoints.small}px) {
    font-size: ${fontSize.large}px;
  }
`;

const Title = styled.div`
  display: ${props => props.isCentered && 'flex'};
  justify-content: ${props => props.isCentered && 'center'};
  font-weight: ${fontWeight.semibold};
  font-size: ${fontSize.xxxxlarge}px;
  line-height: ${lineHeight.title};
  color: ${colors.honorNight};

  @media (max-width: ${breakPoints.small}px) {
    font-size: ${fontSize.xxlarge}px;
  }
`;

const Root = styled.div({
  position: 'relative'
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  user-select: none;
`;

const CANVAS_ACTIONS_GUTTER = 32;
const CanvasActions = styled.div({
  alignItems: 'flex-end',
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  right: CANVAS_ACTIONS_GUTTER,
  top: CANVAS_ACTIONS_GUTTER
});

const Icons = styled.div({
  alignItems: 'center',
  backgroundColor: colors.white,
  borderRadius: 16,
  boxShadow,
  display: 'flex',
  padding: 16,
  width: 'fit-content',
  zIndex: zIndex.ctas
});

const Icon = styled.img(props => ({
  cursor: 'pointer',
  height: props.height,
  position: 'relative',
  top: 0,
  transition: 'top 0.25s ease',
  width: props.width,

  '&:hover': {
    top: -4
  }
}));

const ColorSelector = styled.div({
  alignItems: 'center',
  backgroundColor: colors.white,
  borderRadius: 16,
  boxShadow,
  display: 'flex',
  padding: 16,
  width: 'fit-content',
  zIndex: zIndex.ctas
});

const Color = styled.div(props => ({
  backgroundColor: props.backgroundColor,
  borderRadius: borderRadius.circle,
  boxSizing: 'border-box',
  cursor: 'pointer',
  height: 32,
  width: 32,

  '&:hover': {
    border: `1px solid ${colors.cloudBurst}`
  }
}));

const PaintBrushWrapper = styled.div({
  position: 'absolute',
  right: CANVAS_ACTIONS_GUTTER,
  top: CANVAS_ACTIONS_GUTTER,
  zIndex: zIndex.ctas
});

const InfoColumn = () => (
  <Wrapper>
    <Separator size={10} />
    <Title>
      <Fade delay={FADE_DELAY + FADE_DURATION} duration={FADE_DURATION} bottom>
        Hello, I'm Richard
      </Fade>
    </Title>
    <Separator size={8} />
    <Description>
      <Fade
        delay={FADE_DELAY + 2 * FADE_DURATION}
        duration={FADE_DURATION}
        bottom
      >
        I'm a fullstack engineer living in Sydney, Australia working at RangeMe.
        I like to come up with wacky ideas and make them happen.
      </Fade>
    </Description>
    <Separator size={10} />
    <Fade delay={FADE_DELAY + 3 * FADE_DURATION}>
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
  const [showColors, setShowColors] = React.useState(false);

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
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <Root>
      <Media query={`(min-width: ${breakPoints.large}px)`}>
        {isDesktopView =>
          isDesktopView ? (
            <React.Fragment>
              <CanvasActions>
                <Icons>
                  <Icon
                    height={32}
                    width={32}
                    src={trash}
                    onClick={clearCanvas}
                  />
                  <Separator size={4} />
                  <Icon
                    height={32}
                    width={32}
                    src={colorSelector}
                    onClick={() => setShowColors(s => !s)}
                  />
                </Icons>
                {showColors && (
                  <React.Fragment>
                    <Separator size={4} />
                    <ColorSelector>
                      <Color
                        backgroundColor={colors.dairyCream}
                        onClick={() => setBackgroundColorIndex(0)}
                      />
                      <Separator size={4} />
                      <Color
                        backgroundColor={colors.spearmint}
                        onClick={() => setBackgroundColorIndex(1)}
                      />
                      <Separator size={4} />
                      <Color
                        backgroundColor={colors.roseQuartz}
                        onClick={() => setBackgroundColorIndex(2)}
                      />
                      <Separator size={4} />
                      <Color
                        backgroundColor={colors.pewter}
                        onClick={() => setBackgroundColorIndex(3)}
                      />
                    </ColorSelector>
                  </React.Fragment>
                )}
              </CanvasActions>
              <Panel backgroundColor={getBackgroundColor()}>
                <Column width="50%" height="100%" padding={25 * BASE_UNIT}>
                  <InfoColumn />
                </Column>
                <Column width="50%" height="100%" padding={0}>
                  <BackgroundImage url={selfPortrait} />
                </Column>
                <Canvas
                  canvasRef={canvasRef}
                  customCursor={`url(${canvasBrush}) 0 52, auto`}
                  strokeColor={getBackgroundColor()}
                  height={window.innerHeight}
                  width={window.innerWidth / 2}
                  left={window.innerWidth / 2}
                />
              </Panel>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <PaintBrushWrapper>
                <Icon
                  height={48}
                  width={48}
                  src={paintBrush}
                  onClick={incrementBackgroundColor}
                />
              </PaintBrushWrapper>
              <Panel backgroundColor={getBackgroundColor()}>
                <Column width="100%" height="100%" padding={20 * BASE_UNIT}>
                  <InfoColumn />
                </Column>
              </Panel>
            </React.Fragment>
          )
        }
      </Media>
    </Root>
  );
};

export default Landing;
