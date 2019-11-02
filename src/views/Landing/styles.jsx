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

export const Image = styled.img`
  width: 100%;
`;

export const Description = styled.div`
  font-size: ${fontSize.xmedium}px;
  line-height: ${lineHeight.description};
  color: ${colors.cloudBurst};
`;

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

export const Button = styled.div`
  padding: ${4 * BASE_UNIT}px ${4 * BASE_UNIT}px;
  max-width: ${32 * BASE_UNIT}px;
  color: ${colors.cloudBurst};
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.semibold};
  border: 1px solid ${colors.cloudBurst};
  border-radius: ${borderRadius.regular}px;
  cursor: pointer;
`;

export const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: ${colors.cloudBurst};
  text-transform: none;
  text-decoration: none;
`;
