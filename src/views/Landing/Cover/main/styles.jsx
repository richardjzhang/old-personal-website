import styled from 'styled-components';
import { borderRadius, boxShadow, colors, zIndex } from 'utils/themes';

const BackgroundImage = styled.div(props => ({
  width: '100%',
  height: '100%',
  backgroundImage: `url(${props.url})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%'
}));

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

export {
  BackgroundImage,
  CanvasActions,
  Icons,
  Icon,
  ColorSelector,
  Color,
  PaintBrushWrapper
};
