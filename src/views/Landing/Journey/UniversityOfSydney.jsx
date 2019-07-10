import React from 'react';
import Fade from 'react-reveal/Fade';
import { FADE_DELAY } from '.';
import { MiniCard, Card } from '../../../components/Card';
import usyd_logo from '../../../static/usyd_logo.png';

const TITLE = 'University of Sydney';
const LABEL = '2013 - 2018';
const Image = () => <img src={usyd_logo} alt="" width={100} height={35} />;

export const UniversityOfSydneyMiniCard = () => (
  <Fade delay={FADE_DELAY}>
    <MiniCard title={TITLE} label={LABEL}>
      <Image />
    </MiniCard>
  </Fade>
);

export const UniversityOfSydneyCard = () => (
  <Card title={TITLE} label={LABEL} image={<Image />}>
    After achieving 1st in INFS2020 in 2015, I was offered a position to be
    Lecturer Assistant for this subject from 2016 onwards. My role involved
    helping students with questions regarding exercises, questions, and
    assessments during class. My experience was highly fulfilling, as I had
    always wondered what it was like being on the other side of the classroom.
    Teaching and assisting my own peers was a refreshing experience.
  </Card>
);
