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
  minHeight: string,
  backgroundColor: string,
  isCentered: boolean,
  children?: Node
|};

const Panel = ({ minHeight, backgroundColor, isCentered, children }: Props) => (
  <Container
    style={{
      minHeight,
      backgroundColor,
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
