// @flow
import React from 'react';
import styled from 'styled-components';

import {
  BASE_UNIT,
  colors,
  fontSize,
  fontWeight,
  zIndex
} from 'utils/themes.jsx';

const Root = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: zIndex.navbar,
  padding: `${2 * BASE_UNIT}px ${12 * BASE_UNIT}px`,
  height: 70,
  width: '100%',
  boxSizing: 'border-box',
  color: colors.white,
  transition: 'background-color 0.5s ease-in-out'
});

const Link = styled.div({
  fontSize: fontSize.medium,
  fontWeight: fontWeight.semibold,
  textTransform: 'uppercase'
});

const Separator = styled.div({
  flexShrink: 0,
  width: 8 * BASE_UNIT,
  height: 8 * BASE_UNIT
});

type Props = {|
  backgroundColor?: string
|};

const Navbar = ({ backgroundColor }: Props) => (
  <Root style={{ backgroundColor }}>
    <Link>About</Link>
    <Separator />
    <Link>Work</Link>
  </Root>
);

export default Navbar;
