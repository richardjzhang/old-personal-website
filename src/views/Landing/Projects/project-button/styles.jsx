import styled from 'styled-components';
import { colors } from 'utils/themes';

const Root = styled.div(props => ({
  alignItems: 'center',
  backgroundColor: props.selected ? colors.provincialPink : colors.cream,
  borderRadius: 8,
  boxSizing: 'border-box',
  boxShadow:
    'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
  color: colors.honorNight,
  cursor: 'pointer',
  display: 'flex',
  fontSize: 20,
  fontWeight: 600,
  width: 275,
  padding: '16px 24px',
  transition: 'background-color 0.5s ease'
}));

export { Root };
