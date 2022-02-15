import styled from 'styled-components';
import { colors, fontSize, fontWeight } from 'utils/themes';

const Content = styled.div({
  display: 'flex'
});

const InnerPanel = styled.div({
  alignItems: 'center',
  flexDirection: 'column',
  display: 'flex',
  margin: '0 auto',
  maxWidth: 1200,
  textAlign: 'left',
  width: '100%'
});

const Title = styled.div(props => ({
  color: colors.honorNight,
  fontSize: props.isMobile ? fontSize.xxlarge : fontSize.xxxlarge,
  fontWeight: fontWeight.semibold,
  width: '100%'
}));

export { Content, InnerPanel, Title };
