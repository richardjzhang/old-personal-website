// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

export const Column = styled.div(props => ({
  padding: props.padding,
  height: '100vh',
  width: props.width,
  backgroundColor: props.backgroundColor,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}));

export const ColumnTitle = styled.div(props => ({
  fontFamily: 'LemonMilk',
  fontSize: 72,
  color: props.color
}));

const Container = styled.div(props => ({
  flex: 1,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxHeight: '100vh',
  position: 'relative'
}));

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
