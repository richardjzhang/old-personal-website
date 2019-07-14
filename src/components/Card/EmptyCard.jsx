// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

import {
  borderRadius,
  boxShadow,
  breakPoints,
  colors
} from '../../utils/themes.jsx';

const CardStyle = styled.div`
  height: 400px;
  background-color: ${colors.white};
  box-shadow: ${boxShadow};
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  @media (max-width: ${breakPoints.small}px) {
    display: none;
  }
`;

type Props = {|
  spacing: number,
  children: Node,
  onClick: () => void
|};

export const RightCard = ({ children, spacing, onClick }: Props) => (
  <CardStyle
    style={{
      marginRight: -spacing,
      width: spacing,
      borderRadius: `${borderRadius.regular}px 0 0 ${borderRadius.regular}px`
    }}
    onClick={onClick}
  >
    {children}
  </CardStyle>
);

export const LeftCard = ({ children, spacing, onClick }: Props) => (
  <CardStyle
    style={{
      marginLeft: -spacing,
      width: spacing,
      borderRadius: `0 ${borderRadius.regular}px ${borderRadius.regular}px 0`
    }}
    onClick={onClick}
  >
    {children}
  </CardStyle>
);
