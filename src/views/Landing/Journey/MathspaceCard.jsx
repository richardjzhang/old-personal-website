import React from 'react';
import { Card } from '../../../components/Card';
import mathspace_logo from '../../../static/mathspace_logo.png';

export default () => (
  <Card
    title="Mathspace"
    label="2017 - Present"
    image={<img src={mathspace_logo} alt="" width={45} height={36} />}
  >
    Mathspace is on a mission to take the boring one-size-fits-all mathematics
    textbook and turn it into a personalised interactive journey, helping
    students learn mathematics one step at a time. My role is to transform our
    data into meaningful student insights for teachers so that they can better
    address student needs. Working in a fast paced and agile environment allows
    me to roll these product changes out quickly and see the broader impacts my
    work has on mathematics education.
  </Card>
);
