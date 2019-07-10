import React from 'react';
import Fade from 'react-reveal/Fade';
import { FADE_DELAY } from '.';
import { MiniCard, Card } from '../../../components/Card';
import s4s_logo from '../../../static/s4s_logo.png';

const TITLE = 'S4S Coaching';
const LABEL = '2013 - 2017';
const Image = () => <img src={s4s_logo} alt="" width={50} height={42} />;

export const S4SMiniCard = () => (
  <Fade delay={FADE_DELAY}>
    <MiniCard title={TITLE} label={LABEL}>
      <Image />
    </MiniCard>
  </Fade>
);

export const S4SCard = () => (
  <Card title={TITLE} label={LABEL} image={<Image />}>
    At S4S, we help students analyse their mistakes from previous exams and
    assignments before developing the right strategies to help them improve. As
    a tutor, this approach to learning helped my students reach their full
    learning potential. In addition to tutoring, I was also responsible for
    managing tutors at our Castle Hill Centre - ensuring that all tutors were on
    time to classes, and teaching to the S4S standard.
  </Card>
);
