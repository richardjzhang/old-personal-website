// @flow
import styled from 'styled-components';

import {
  BASE_UNIT,
  borderRadius,
  colors,
  fontSize,
  fontWeight,
  lineHeight
} from 'utils/themes';

export const FADE_DELAY = 500;
export const FADE_DURATION = 1000;

export const Image = styled.img`
  width: 100%;
`;

export const Description = styled.div(props => ({
  fontSize: fontSize.xmedium,
  lineHeight: lineHeight.description,
  color: props.theme === 'light' ? colors.white : colors.cloudBurst
}));

export const Separator = styled.div(props => ({
  flexShrink: 0,
  ...(props.small
    ? {
        height: 4 * BASE_UNIT,
        width: 4 * BASE_UNIT
      }
    : {}),
  ...(props.large
    ? {
        height: 8 * BASE_UNIT,
        width: 8 * BASE_UNIT
      }
    : {})
}));

export const Button = styled.div(props => ({
  padding: 4 * BASE_UNIT,
  maxWidth: 32 * BASE_UNIT,
  fontSize: fontSize.medium,
  fontWeight: fontWeight.semibold,
  border: `1px solid ${
    props.theme === 'light' ? colors.white : colors.cloudBurst
  }`,
  borderRadius: borderRadius.regular,
  cursor: 'pointer'
}));

export const ButtonLink = styled.a(props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  color: props.theme === 'light' ? colors.white : colors.cloudBurst,
  textTransform: 'none',
  textDecoration: 'none'
}));
