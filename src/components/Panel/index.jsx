// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

import { BASE_UNIT } from '../../utils/themes.jsx';

const PANEL_MIN_HEIGHT = '100vh';
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
`;
type Props = {|
  minHeight?: string,
  backgroundColor?: string,
  marginTop?: number,
  padding?: number,
  isCenteredVertically?: boolean,
  isCenteredHorizontally?: boolean,
  isPositionRelative?: boolean,
  children?: Node
|};

const Panel = ({
  minHeight = PANEL_MIN_HEIGHT,
  backgroundColor,
  marginTop,
  padding = PANEL_PADDING,
  isCenteredVertically,
  isCenteredHorizontally,
  isPositionRelative,
  children
}: Props) => (
  <Container
    style={{
      minHeight,
      backgroundColor,
      marginTop,
      padding,
      ...(isCenteredVertically
        ? {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
          }
        : {}),
      ...(isCenteredHorizontally
        ? {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }
        : {}),
      ...(isPositionRelative ? { position: 'relative' } : {})
    }}
  >
    {children}
  </Container>
);

export default Panel;
