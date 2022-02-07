// @flow
import React from 'react';
import { SocialIcon as Icon } from 'react-social-icons';
import styled from 'styled-components';

import {
  BASE_UNIT,
  borderRadius,
  boxShadow,
  colors,
  zIndex
} from 'utils/themes';

const ICON_VERTICAL_MARGIN = 3 * BASE_UNIT;
const ICON_HORIZONTAL_MARGIN = 3 * BASE_UNIT;

export const SocialIcons = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: ${-ICON_VERTICAL_MARGIN}px ${-ICON_HORIZONTAL_MARGIN}px;
  z-index: ${zIndex.ctas};
`;

const Root = styled.div({
  position: 'relative'
});

const IconWrapper = styled.div({
  position: 'relative',
  flexShrink: 0,
  margin: `${ICON_VERTICAL_MARGIN}px ${ICON_HORIZONTAL_MARGIN}px`,
  height: 48,
  width: 48,
  boxShadow,
  borderRadius: borderRadius.circle,
  backgroundColor: colors.cloudBurst,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bottom: 0,
  transition: 'bottom 0.25s ease',

  '&:hover': {
    bottom: 5
  }
});

type Props = {|
  url: string
|};

const SocialIcon = ({ url }: Props) => (
  <Root>
    <IconWrapper>
      <Icon
        url={url}
        bgColor="transparent"
        fgColor={colors.white}
        target="_blank"
      />
    </IconWrapper>
  </Root>
);

export default SocialIcon;
