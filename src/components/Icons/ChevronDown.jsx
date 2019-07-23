// @flow
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BASE_UNIT, colors, hoverColors } from '../../utils/themes.jsx';

const bounce = keyframes`
0% { bottom: 0px; } 50% {bottom: 15px;} 100% {bottom: 0px;}
`;

const IconWrapper = styled.div`
  margin-top: auto;
  margin-bottom: ${15 * BASE_UNIT}px;
  cursor: pointer;
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-top: -25px;
  margin-left: -25px;
  height: 50px;
  width: 50px;
  animation: ${bounce} 1s infinite;
`;

const Icon = styled.svg`
  height: 48px;
  width: 48px;
  transition: fill 0.25s;
  fill: ${colors.dodgerBlue};
  cursor: pointer;

  &:hover {
    fill: ${hoverColors.dodgerBlue};
    transition: background-color 0.5s ease;
  }
`;

type Props = {|
  setRef: () => void
|};

const ChevronDown = ({ setRef }: Props) => (
  <IconWrapper onClick={setRef}>
    <Icon xmlns="http://www.w3.org/2000/svg">
      <path fill="none" d="M-1-1h50v50H-1z" />
      <g>
        <path
          stroke="null"
          d="M24 28.515h0l18.252-17.833c.45-.448 1.195-.438 1.656.021l3.206 3.19c.46.458.471 1.204.02 1.652L24.85 37.325c-.23.235-.545.341-.849.32a1.147 1.147 0 0 1-.849-.32L.865 15.545c-.45-.448-.44-1.194.021-1.653l3.206-3.189c.461-.459 1.205-.47 1.656-.021L24 28.515z"
        />
      </g>
    </Icon>
  </IconWrapper>
);

export default ChevronDown;
