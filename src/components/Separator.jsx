// @flow
import styled from 'styled-components';
import { BASE_UNIT } from 'utils/themes';

const Separator = styled.div(props => ({
  flexShrink: 0,
  height: props.size * BASE_UNIT,
  width: props.size * BASE_UNIT
}));

export default Separator;
