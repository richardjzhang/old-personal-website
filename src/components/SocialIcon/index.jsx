// @flow
import React from 'react';
import { SocialIcon as Icon } from 'react-social-icons';
import styled from 'styled-components';

import { colors } from 'utils/themes';
import { BASE_UNIT } from '../../utils/themes';

const ICON_MARGIN = BASE_UNIT;

export const SocialIconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${-ICON_MARGIN}px;
  margin-bottom: ${-ICON_MARGIN}px;
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
      marginTop: ICON_MARGIN,
      marginBottom: BASE_UNIT
    }}
    bgColor={colors.cloudBurst}
    fgColor={colors.white}
  />
);

export default SocialIcon;
