import React from 'react';
import Fade from 'react-reveal/Fade';
import { FADE_DELAY } from '.';
import { MiniCard, Card } from '../../../components/Card';
import kpmg_logo from '../../../static/kpmg_logo.png';

const TITLE = 'KPMG';
const LABEL = '2016 - 2017';
const Image = () => <img src={kpmg_logo} alt="" width={100} height={42} />;

export const KPMGMiniCard = () => (
  <Fade delay={FADE_DELAY}>
    <MiniCard title={TITLE} label={LABEL}>
      <Image />
    </MiniCard>
  </Fade>
);

export const KPMGCard = () => (
  <Card title={TITLE} label={LABEL} image={<Image />}>
    The Technology Risk group at KPMG has deep experience and skills to help
    clients better comprehend and manage technology, cyber and information
    risks. During my time here, I supported the work of senior members of the
    team and was given the opportunity to check off on project deliverables with
    clients in face to face meetings.
  </Card>
);
