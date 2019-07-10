import React from 'react';
import Fade from 'react-reveal/Fade';
import { FADE_DELAY } from '.';
import { MiniCard, Card } from '../../../components/Card';
import smash_logo from '../../../static/smash_logo.png';

const TITLE = 'SMASH Inc.';
const LABEL = '2014 - 2015';
const Image = () => <img src={smash_logo} alt="" width={100} height={20} />;

type MiniCardProps = {|
  onClick: () => void
|};

export const SMASHMiniCard = ({ onClick }: MiniCardProps) => (
  <Fade delay={FADE_DELAY}>
    <MiniCard title={TITLE} label={LABEL} onClick={onClick}>
      <Image />
    </MiniCard>
  </Fade>
);

export const SMASHCard = () => (
  <Fade delay={FADE_DELAY}>
    <Card title={TITLE} label={LABEL} image={<Image />}>
      SMASH! is an annual Japanese popular culture convention held in Sydney.
      During my time here, the structure of SMASH! was undergoing immense
      change. I was lucky enough to be part of the Treasury team to help oversee
      and implement these some of these changes, such as the development of an
      invoicing system integrated across different departments of SMASH.
    </Card>
  </Fade>
);
