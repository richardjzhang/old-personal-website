import React from 'react';
import styled from 'styled-components';

import { zIndex } from 'utils/themes';

export const Column = styled.div(props => ({
  padding: props.padding,
  minHeight: props.height,
  width: props.width,
  backgroundColor: props.backgroundColor,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}));

const Container = styled.div`
  z-index: ${zIndex.panel};
  flex: 1;
  box-sizing: border-box;
  display: flex;
  transition: background-color 0.5s ease;
`;

const Panel = ({
  backgroundColor,
  children,
  minHeight = 0,
  minWidth = '100vw',
  padding
}) => (
  <Container
    style={{
      backgroundColor,
      minHeight,
      minWidth,
      padding
    }}
  >
    {children}
  </Container>
);

export default Panel;
