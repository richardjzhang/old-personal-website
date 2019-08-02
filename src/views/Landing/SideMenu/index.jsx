// @flow
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import {
  BASE_UNIT,
  breakPoints,
  colors,
  fontSize,
  fontWeight,
  zIndex
} from '../../../utils/themes.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 60px;
  left: 60px;
  bottom: 0px;
  z-index: ${zIndex.sideMenu};

  @media (max-width: ${breakPoints.large}px) {
    display: none;
  }
`;

const MenuItems = styled.div`
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.semibold};
  color: ${colors.white};
`;

const Item = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: ${colors.dodgerBlue};
    transition: background-color 0.5s ease;
  }

  &:not(:last-child) {
    margin-bottom: ${8 * BASE_UNIT}px;
  }
`;

type Props = {|
  aboutRef: any,
  creationsRef: any,
  thoughtsRef: any,
  scroll: number,
  handleTransition: (ref: any) => void
|};

const SideMenu = ({
  aboutRef,
  creationsRef,
  thoughtsRef,
  scroll,
  handleTransition
}: Props) => {
  const colorCheck = (currentRef: any, nextRef?: any) =>
    nextRef
      ? currentRef.current != null &&
        scroll >= currentRef.current.offsetTop &&
        nextRef.current != null &&
        scroll < nextRef.current.offsetTop
      : currentRef.current != null && scroll >= currentRef.current.offsetTop;

  return (
    <Wrapper>
      <Fade left delay={400}>
        <MenuItems>
          <Item
            onClick={() =>
              aboutRef.current != null && handleTransition(aboutRef)
            }
            style={{
              color: colorCheck(aboutRef, creationsRef) && colors.dodgerBlue,
              transition: 'color 0.5s ease'
            }}
          >
            About
          </Item>
          <Item
            onClick={() =>
              creationsRef.current != null && handleTransition(creationsRef)
            }
            style={{
              color: colorCheck(creationsRef, thoughtsRef) && colors.dodgerBlue,
              transition: 'color 0.5s ease'
            }}
          >
            Creations
          </Item>
          <Item
            onClick={() =>
              thoughtsRef.current != null && handleTransition(thoughtsRef)
            }
            style={{
              color: colorCheck(thoughtsRef) && colors.dodgerBlue,
              transition: 'color 0.5s ease'
            }}
          >
            Thoughts
          </Item>
        </MenuItems>
      </Fade>
    </Wrapper>
  );
};

export default SideMenu;
