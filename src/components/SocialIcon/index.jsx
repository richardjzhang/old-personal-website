// @flow
import React from 'react';
import { SocialIcon as Icon } from 'react-social-icons';

import { colors } from 'utils/themes';

type Props = {|
  url: string
|};

const SocialIcon = ({ url }: Props) => (
  <Icon
    url={url}
    style={{ height: 40, width: 40 }}
    bgColor={colors.cloudBurst}
    fgColor={colors.white}
  />
);

export default SocialIcon;
