// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  box-sizing: border-box;
`;
type Props = {|
  minHeight: string,
  backgroundColor?: string,
  paddingTop?: string,
  paddingRight?: string,
  paddingBottom?: string,
  paddingLeft?: string,
  isCentered?: boolean,
  children?: Node
|};

const Panel = ({
  minHeight,
  backgroundColor,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  isCentered,
  children
}: Props) => (
  <Container
    style={{
      minHeight,
      backgroundColor,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      ...(isCentered
        ? {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }
        : {})
    }}
  >
    {children}
  </Container>
);

export default Panel;
