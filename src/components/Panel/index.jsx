// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

export const Column = styled.div(props => ({
  padding: props.padding,
  height: props.height,
  width: props.width,
  backgroundColor: props.backgroundColor,
  boxSizing: 'border-box'
}));

const Container = styled.div`
  flex: 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {|
  backgroundColor?: string,
  children?: Node
|};

const Panel = ({ backgroundColor, children }: Props) => (
  <Container
    style={{
      backgroundColor
    }}
  >
    {children}
  </Container>
);

export default Panel;
