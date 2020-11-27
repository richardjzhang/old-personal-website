// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

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
  flex: 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ease;
`;

type Props = {|
  minHeight?: string,
  backgroundColor?: string,
  children?: Node
|};

const Panel = ({ backgroundColor, children, minHeight = '100vh' }: Props) => (
  <Container
    style={{
      backgroundColor,
      minHeight
    }}
  >
    {children}
  </Container>
);

export default Panel;
