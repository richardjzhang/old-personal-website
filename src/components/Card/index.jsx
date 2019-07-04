// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

import {
  BASE_UNIT,
  borderRadius,
  boxShadow,
  colors,
  fontSize,
  fontWeight
} from '../../utils/themes.jsx';

export const Card = styled.div`
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
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.semibold};
  color: ${colors.cloudBurst};
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${4 * BASE_UNIT}px;
  font-size: ${fontSize.normal}px;
  color: ${colors.cloudBurst};
  text-overflow: ellipsis;
`;

// Mini Card
const TitleWrapper = styled.div`
  margin-left: ${6 * BASE_UNIT}px;
`;

const Subtitle = styled.div`
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
  <Card>
    <CardHeader>
      {children}
      <TitleWrapper>
        {title} <Subtitle>{label}</Subtitle>
      </TitleWrapper>
    </CardHeader>
  </Card>
);
