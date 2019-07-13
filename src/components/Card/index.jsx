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

const CardLabel = styled.div`
  font-size: ${fontSize.normal}px;
  font-weight: ${fontWeight.regular};
  color: ${colors.hitGray};
  margin-top: ${2 * BASE_UNIT}px;
`;

type MiniCardProps = {|
  title: string,
  label: string,
  onClick?: () => void,
  children: Node
|};

export const MiniCard = ({
  title,
  label,
  onClick,
  children
}: MiniCardProps) => (
  <MiniCardStyles onClick={onClick}>
    <MiniCardHeader>
      {children}
      <MiniCardContent>
        {title} <CardLabel>{label}</CardLabel>
      </MiniCardContent>
    </MiniCardHeader>
  </MiniCardStyles>
);

const CardStyles = styled.div`
  background-color: ${colors.white};
  border-radius: ${borderRadius.regular}px;
  box-shadow: ${boxShadow};
  max-width: 400px;
`;

const CardHeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${6 * BASE_UNIT}px ${8 * BASE_UNIT}px ${5 * BASE_UNIT}px;
  border-bottom: 1px solid ${colors.iron};
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.semibold};
  color: ${colors.cloudBurst};
`;

const CardTitleWrapper = styled.div`
  text-align: center;
  margin-top: ${3 * BASE_UNIT}px;
`;

const CardContentStyles = styled.div`
  padding: ${6 * BASE_UNIT}px ${8 * BASE_UNIT}px;
  font-size: ${fontSize.normal}px;
  color: ${colors.cloudBurst};
  text-overflow: ellipsis;
`;

type CardProps = {|
  title: string,
  label: string,
  children: Node,
  image: Node
|};

export const Card = ({ title, label, children, image }: CardProps) => (
  <CardStyles>
    <CardHeaderStyles>
      {image}
      <CardTitleWrapper>
        {title} <CardLabel>{label}</CardLabel>
      </CardTitleWrapper>
    </CardHeaderStyles>
    <CardContentStyles>{children}</CardContentStyles>
  </CardStyles>
);
