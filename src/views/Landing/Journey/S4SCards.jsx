import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { FADE_DELAY } from '.';
import { MiniCard, Card } from '../../../components/Card';
import s4s_logo from '../../../static/s4s_logo.png';

const TITLE = 'S4S Coaching';
const ROLE = 'Coach';
const LABEL = '2013 - 2017';
const Image = () => <img src={s4s_logo} alt="" width={50} height={42} />;
const LargeImage = () => <img src={s4s_logo} alt="" width={60} height={50} />;

type MiniCardProps = {|
  onClick: () => void
|};

export const S4SMiniCard = ({ onClick }: MiniCardProps) => (
  <Fade delay={FADE_DELAY}>
    <MiniCard title={TITLE} label={LABEL} onClick={onClick}>
      <Image />
    </MiniCard>
  </Fade>
);

type CardProps = {|
  direction: ?string
|};

export const S4SCard = ({ direction, show }: CardProps) => (
  <Slide
    right={direction === 'right'}
    left={direction === 'left'}
    top={direction === 'top'}
    duration={1500}
  >
    <Card title={ROLE} label={LABEL} image={<LargeImage />}>
      <p>
        S4S Coaching stands for 'Students For Students'. This is because we are
        run by young and intelligent university students who are committed to
        sharing their success with current high school students. By closing that
        age gap, students have a better sense of understanding and a more
        comfortable learning space.
      </p>
      <p>
        My role as a coach at S4S was not only to help students achieve their
        personal best in high school, but to also prepare them with essential
        life skills after this important first step. I strived to help my
        students in all aspects of life and wanted to give them the very best
        tips I had for tackling life after high school.
      </p>
    </Card>
  </Slide>
);
