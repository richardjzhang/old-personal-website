// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 56px;
  flex: 1;
  box-sizing: border-box;
`;
type Props = {|
  height: string,
  backgroundColor: string,
  children?: Node
|};

const Panel = ({ height, backgroundColor, children }: Props) => (
  <Container
    style={{
      height,
      backgroundColor
    }}
  >
    {children}
  </Container>
);

export default Panel;
