import styled from 'styled-components';
import { colors, fontSize, fontWeight } from 'utils/themes';

const InnerPanel = styled.div({
  width: '100%'
});

const Title = styled.div(props => ({
  color: colors.honorNight,
  fontSize: props.isMobile ? fontSize.xxlarge : fontSize.xxxlarge,
  fontWeight: fontWeight.semibold
}));

export { InnerPanel, Title };
