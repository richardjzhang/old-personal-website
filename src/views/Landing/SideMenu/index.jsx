// @flow
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import {
  BASE_UNIT,
  breakPoints,
  colors,
  fontSize,
  fontWeight
} from '../../../utils/themes.jsx';

const Wrapper = styled.div`
  position: fixed;
  top: 60px;
  left: 60px;

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
  journeyRef: any,
  storiesRef: any,
  creationsRef: any,
  lessonsRef: any,
  scroll: number,
  handleTransition: (ref: any) => void
|};

const SideMenu = ({
  journeyRef,
  storiesRef,
  creationsRef,
  lessonsRef,
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
        <MenuItems
          style={{
            color:
              journeyRef.current != null &&
              scroll >= journeyRef.current.offsetTop &&
              colors.outerSpace,
            transition: 'color 0.5s ease'
          }}
        >
          <Item
            onClick={() =>
              journeyRef.current != null && handleTransition(journeyRef)
            }
            style={{
              color: colorCheck(journeyRef, storiesRef) && colors.dodgerBlue,
              transition: 'color 0.5s ease'
            }}
          >
            Journey
          </Item>
          <Item
            onClick={() =>
              storiesRef.current != null && handleTransition(storiesRef)
            }
            style={{
              color: colorCheck(storiesRef, creationsRef) && colors.dodgerBlue,
              transition: 'color 0.5s ease'
            }}
          >
            Stories
          </Item>
          <Item
            onClick={() =>
              creationsRef.current != null && handleTransition(creationsRef)
            }
            style={{
              color: colorCheck(creationsRef, lessonsRef) && colors.dodgerBlue,
              transition: 'color 0.5s ease'
            }}
          >
            Creations
          </Item>
          <Item
            onClick={() =>
              lessonsRef.current != null && handleTransition(lessonsRef)
            }
            style={{
              color: colorCheck(lessonsRef) && colors.dodgerBlue,
              transition: 'color 0.5s ease'
            }}
          >
            Lessons
          </Item>
        </MenuItems>
      </Fade>
    </Wrapper>
  );
};

export default SideMenu;
