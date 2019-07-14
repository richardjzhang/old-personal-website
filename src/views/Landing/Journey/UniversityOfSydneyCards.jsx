import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { FADE_DELAY } from '.';
import { MiniCard, Card } from '../../../components/Card';
import usyd_logo from '../../../static/usyd_logo.png';
import { stringify } from 'postcss';

const TITLE = 'USYD';
const ROLE = 'Student';
const LABEL = '2013 - 2018';
const Image = () => <img src={usyd_logo} alt="" width={100} height={35} />;

type MiniCardProps = {|
  onClick: () => void
|};

export const UniversityOfSydneyMiniCard = ({ onClick }: MiniCardProps) => (
  <Fade delay={FADE_DELAY}>
    <MiniCard title={TITLE} label={LABEL} onClick={onClick}>
      <Image />
    </MiniCard>
  </Fade>
);

type CardProps = {|
  direction: ?string
|};

export const UniversityOfSydneyCard = ({ direction, show }: CardProps) => (
  <Slide
    right={direction === 'right'}
    left={direction === 'left'}
    top={direction === 'top'}
    duration={1500}
  >
    <Card title={ROLE} label={LABEL} image={<Image />}>
      <p>
        Being a student at the University of Sydney was one of the most
        rewarding experiences I've had so far in my life. I made lifelong
        connections with some of my closest friends and was given the time to
        really figure out what it is I like doing.
      </p>
      <p>
        Having placed 1st in one of my BIS subjects I was offered a position to
        be Lecturer Assistant for the subject from 2016 onwards. My role
        involved assisting students with questions and exercises during class. I
        really got a taste of what it was like being on the other side of the
        classroom and have a greater appreciation for the work our teachers do
        for us.
      </p>
    </Card>
  </Slide>
);
