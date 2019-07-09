// @flow
import React from 'react';
import styled from 'styled-components';

import {
  BASE_UNIT,
  borderRadius,
  breakPoints,
  zIndex
} from '../../utils/themes.jsx';

const HEADER_MARGIN_LEFT = '35%';
const HEADER_MARGIN_TOP = 2 * BASE_UNIT;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: ${zIndex.header};

  @media (min-width: ${breakPoints.large}px) {
    margin-left: ${HEADER_MARGIN_LEFT};
  }
`;
const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${HEADER_MARGIN_TOP}px;
  height: 60px;
  width: 150px;
  background-color: rgba(38, 50, 56, 0.6);
  border-radius: ${borderRadius.regular}px;
`;

const Circle = styled.div`
  width: ${4 * BASE_UNIT}px;
  height: ${4 * BASE_UNIT}px;
  border-radius: ${borderRadius.circle}px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: ${2 * BASE_UNIT}px;
  }
`;

type Props = {|
  options: Array<{
    title: string,
    backgroundColor: string
  }>
|};

const FixedHeader = ({ options }: Props) => (
  <Header>
    <Options>
      {options.map(option => (
        <Circle
          key={option.title}
          style={{ backgroundColor: option.backgroundColor }}
        />
      ))}
    </Options>
  </Header>
);

export default FixedHeader;
