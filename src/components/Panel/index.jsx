// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

import { BASE_UNIT } from '../../utils/themes.jsx';

const Container = styled.div`
  padding: ${14 * BASE_UNIT}px;
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
