// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

import {
  BASE_UNIT,
  borderRadius,
  boxShadow,
  breakPoints,
  colors,
  fontSize,
  fontWeight
} from '../../utils/themes.jsx';

const MiniCardStyles = styled.div`
  display: flex;
  padding: ${6 * BASE_UNIT}px ${8 * BASE_UNIT}px;
  background-color: ${colors.white};
  border-radius: ${borderRadius.regular}px;
  box-shadow: ${boxShadow};
  min-height: 60px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.porcelain};
    transition: background-color 0.5s ease;
  }

  @media (max-width: ${breakPoints.medium}px) {
    min-height: 100px;
  }
`;

const MiniCardHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.semibold};
  color: ${colors.cloudBurst};

  @media (max-width: ${breakPoints.medium}px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

const MiniCardContent = styled.div`
  margin-left: ${6 * BASE_UNIT}px;

  @media (max-width: ${breakPoints.medium}px) {
    text-align: center;
    margin-left: 0;
    margin-top: ${3 * BASE_UNIT}px;
  }
`;

const MiniCardLabel = styled.div`
  font-size: ${fontSize.normal}px;
  font-weight: ${fontWeight.regular};
  color: ${colors.hitGray};
  margin-top: ${BASE_UNIT}px;
`;

type MiniCardProps = {|
  title: string,
  label: string,
  children: Node
|};

export const MiniCard = ({ title, label, children }: MiniCardProps) => (
  <MiniCardStyles>
    <MiniCardHeader>
      {children}
      <MiniCardContent>
        {title} <MiniCardLabel>{label}</MiniCardLabel>
      </MiniCardContent>
    </MiniCardHeader>
  </MiniCardStyles>
);

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${4 * BASE_UNIT}px;
  font-size: ${fontSize.normal}px;
  color: ${colors.cloudBurst};
  text-overflow: ellipsis;
`;
