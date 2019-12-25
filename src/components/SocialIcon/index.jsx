// @flow
import React from 'react';
import { SocialIcon as Icon } from 'react-social-icons';
import styled from 'styled-components';

import { colors } from 'utils/themes';
import { BASE_UNIT } from '../../utils/themes';

const ICON_VERTICAL_MARGIN = BASE_UNIT;
const ICON_HORIZONTAL_MARGIN = 2 * BASE_UNIT;

export const SocialIconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${-ICON_VERTICAL_MARGIN}px ${-ICON_HORIZONTAL_MARGIN}px;
`;

type Props = {|
  url: string
|};

const SocialIcon = ({ url }: Props) => (
  <Icon
    url={url}
    style={{
      height: 40,
      width: 40,
      flexShrink: 0,
      margin: `${ICON_VERTICAL_MARGIN}px ${ICON_HORIZONTAL_MARGIN}px`
    }}
    bgColor={colors.cloudBurst}
    fgColor={colors.white}
  />
);

export default SocialIcon;
