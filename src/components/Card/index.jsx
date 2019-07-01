// @flow
import styled from 'styled-components';

import { colors, fontSize, fontWeight } from '../../utils/themes.jsx';

export const Card = styled.div`
  height: 250px;
  width: 250px;
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px 24px 8px 24px;
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.semibold};
  color: ${colors.cloudBurst};
`;

export const CardContent = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  font-size: ${fontSize.normal}px;
  color: ${colors.cloudBurst};
  text-overflow: ellipsis;
`;
