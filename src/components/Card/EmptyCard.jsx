// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

import { borderRadius, boxShadow, colors } from '../../utils/themes.jsx';

const RightCardStyle = styled.div`
  height: 400px;
  background-color: ${colors.white};
  border-radius: ${borderRadius.regular}px 0 0 ${borderRadius.regular}px;
  box-shadow: ${boxShadow};
  opacity: 0.7;
  cursor: pointer;
`;

const LeftCardStyle = styled.div`
  height: 400px;
  background-color: ${colors.white};
  border-radius: 0 ${borderRadius.regular}px ${borderRadius.regular}px 0;
  box-shadow: ${boxShadow};
  opacity: 0.7;
  cursor: pointer;
`;

type Props = {|
  spacing: number,
  children: Node,
  onClick: () => void
|};

export const RightCard = ({ children, spacing, onClick }: Props) => (
  <RightCardStyle style={{ marginRight: -spacing, width: spacing }}>
    {children}
  </RightCardStyle>
);

export const LeftCard = ({ children, spacing, onClick }: Props) => (
  <LeftCardStyle style={{ marginLeft: -spacing, width: spacing }}>
    {children}
  </LeftCardStyle>
);
