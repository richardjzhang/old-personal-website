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

const Root = styled.div(props => ({
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  zIndex: zIndex.navbar,
  padding: `${2 * BASE_UNIT}px ${25 * BASE_UNIT}px`,
  height: 80,
  width: '100%',
  boxSizing: 'border-box',
  color: colors.white,
  backgroundColor: props.backgroundColor,
  transition:
    'visibility 0.25s, opacity 0.25s, background-color 0.25s ease-in-out',
  visibility: props.visible ? 'visible' : 'hidden',
  opacity: props.visible ? 1 : 0
}));

const Link = styled.div({
  fontSize: fontSize.medium,
  fontWeight: fontWeight.semibold,
  textTransform: 'uppercase',
  cursor: 'pointer'
});

const Separator = styled.div({
  flexShrink: 0,
  width: 8 * BASE_UNIT,
  height: 8 * BASE_UNIT
});

type Props = {|
  backgroundColor?: string
|};

const Navbar = ({ backgroundColor }: Props) => {
  const [pos, setPos] = React.useState(window.pageYOffset);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const temp = window.pageYOffset;

      setVisible(pos > temp);
      setPos(temp);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Root backgroundColor={backgroundColor} visible={visible}>
      <Link>About</Link>
      <Separator />
      <Link>Work</Link>
      <Separator />
      <Link>Thoughts</Link>
    </Root>
  );
};

export default Navbar;
