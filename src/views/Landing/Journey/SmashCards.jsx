import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { FADE_DELAY } from '.';
import { MiniCard, Card } from '../../../components/Card';
import smash_logo from '../../../static/smash_logo.png';

const TITLE = 'SMASH Inc.';
const ROLE = 'Finance Officer';
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

type CardProps = {|
  direction: ?string
|};

export const SMASHCard = ({ direction, show }: CardProps) => (
  <Slide
    right={direction === 'right'}
    left={direction === 'left'}
    top={direction === 'top'}
    duration={1500}
  >
    <Card title={ROLE} label={LABEL} image={<Image />}>
      <p>
        SMASH is a Japanese pop culture convention that is devoted to artists,
        creators and fans alike. It has become a driving force in Australia’s
        anime and manga community, attracting thousands of visitors every year.
      </p>

      <p>
        During my time here, the structure of SMASH! was undergoing immense
        change. I was lucky enough to be part of the Treasury team to help
        oversee and implement some of these changes, one of them being the
        development of an integrated invoicing system that would formalise
        requests across departments of SMASH.
      </p>
    </Card>
  </Slide>
);
