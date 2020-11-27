// @flow
import React, { type Node } from 'react';
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
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${zIndex.panel};
  flex: 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ease;
`;

type Props = {|
  minHeight?: string,
  minWidth?: string,
  backgroundColor?: string,
  children?: Node
|};

const Panel = ({
  backgroundColor,
  children,
  minHeight = '100vh',
  minWidth = '100vw'
}: Props) => (
  <Container
    style={{
      backgroundColor,
      minHeight,
      minWidth
    }}
  >
    {children}
  </Container>
);

export default Panel;
