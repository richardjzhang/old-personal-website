// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

import { BASE_UNIT } from '../../utils/themes.jsx';

const PANEL_MIN_HEIGHT = '70vh';
const PANEL_PADDING = 24;

export const ColumnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
`;

export const Column = styled.div(props => ({
  width: props.width
}));

export const ColumnSeparator = styled.div`
  flex-shrink: 0;
  width: ${12 * BASE_UNIT}px;
  height: ${12 * BASE_UNIT}px;
`;

const Container = styled.div`
  flex: 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;
type Props = {|
  minHeight?: string,
  backgroundColor?: string,
  marginTop?: number,
  padding?: number,
  children?: Node
|};

const Panel = ({
  minHeight = PANEL_MIN_HEIGHT,
  backgroundColor,
  marginTop,
  padding = PANEL_PADDING,
  children
}: Props) => (
  <Container
    style={{
      minHeight,
      backgroundColor,
      marginTop,
      padding
    }}
  >
    {children}
  </Container>
);

export default Panel;
