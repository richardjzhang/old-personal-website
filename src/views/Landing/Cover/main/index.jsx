import React from 'react';
import Canvas from 'components/Canvas';
import Panel, { Column } from 'components/Panel';
import Media from 'components/Media';
import Separator from 'components/Separator';
import selfPortrait from 'assets/self-portrait.jpeg';
import trash from 'assets/trash.svg';
import paintBrush from 'assets/paint_brush_1.svg';
import canvasBrush from 'assets/paint_brush_2.svg';
import colorSelector from 'assets/colors.svg';
import { BASE_UNIT, breakPoints, colors } from 'utils/themes';
import InfoColumn from 'views/Landing/Cover/info-column';
import {
  BackgroundImage,
  CanvasActions,
  Icons,
  Icon,
  ColorSelector,
  Color,
  PaintBrushWrapper
} from './styles';

const BACKGROUND_COLORS = [
  colors.dairyCream,
  colors.spearmint,
  colors.roseQuartz,
  colors.pewter
];

const Cover = () => {
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
    <div>
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
              <Panel backgroundColor={getBackgroundColor()} minHeight="100vh">
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
              <Panel backgroundColor={getBackgroundColor()} minHeight="100vh">
                <Column width="100%" height="100%" padding="50px">
                  <InfoColumn />
                </Column>
              </Panel>
            </React.Fragment>
          )
        }
      </Media>
    </div>
  );
};

export { Cover };
