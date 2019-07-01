// @flow
import React from 'react';
import styled from 'styled-components';
import Logo from '../../static/mathspace_logo.png';

import { colors, fontSize, fontWeight } from '../../utils/themes.jsx';

const Card = styled.div`
  height: 250px;
  width: 250px;
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px 24px 8px 24px;
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.semibold};
  color: ${colors.cloudBurst};
`;

const CardContent = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  font-size: ${fontSize.normal}px;
  color: ${colors.cloudBurst};
  text-overflow: ellipsis;
`;

const Image = styled.img`
  margin-bottom: 24px;
`;

type Props = {|
  nodes?: Array<{
    title: string,
    description: string,
    image: string
  }>
|};

const TimeLine = ({ nodes }: Props) => (
  <Card>
    <CardHeader>
      <Image src={Logo} alt="" width={50} height={40} />
      Mathspace
    </CardHeader>
    <CardContent>
      At Mathspace, we empower teachers to deliver tomorrow's model of education
      today.
    </CardContent>
  </Card>
);

export default TimeLine;
