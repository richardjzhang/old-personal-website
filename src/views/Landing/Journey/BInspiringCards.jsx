import React from 'react';
import Fade from 'react-reveal/Fade';
import { FADE_DELAY } from '.';
import { MiniCard, Card } from '../../../components/Card';
import b_inspiring_logo from '../../../static/b_inspiring_logo.png';

const TITLE = 'B.Inspiring Inc.';
const LABEL = '2015 - 2016';
const Image = () => (
  <img
    src={b_inspiring_logo}
    alt=""
    width={45}
    height={45}
    style={{ borderRadius: '100px' }}
  />
);

type MiniCardProps = {|
  onClick: () => void
|};

export const BInspiringMiniCard = ({ onClick }: MiniCardProps) => (
  <Fade delay={FADE_DELAY}>
    <MiniCard title={TITLE} label={LABEL} onClick={onClick}>
      <Image />
    </MiniCard>
  </Fade>
);

export const BInspiringCard = () => (
  <Fade delay={FADE_DELAY}>
    <Card title={TITLE} label={LABEL} image={<Image />}>
      B.Inspiring Incorporated is a not for profit organisation that aims to
      inspire and empower Sydney's youth to use their skills and talents to
      create and sustain positive change in their communities. During my time
      here, I was given the opportunity to develop and run what would eventually
      become the STEM and Leadership conference. Students who attend this
      conference are given exposure to industry and academic professionals in
      the STEM field, and hone their leadership skills through workshops and
      pitching sessions.
    </Card>
  </Fade>
);
