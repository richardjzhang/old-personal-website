// @flow
import React from 'react';
import styled from 'styled-components';
import Logo from '../../static/mathspace_logo.png';

import { Card, CardHeader, CardContent } from '../Card';

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
