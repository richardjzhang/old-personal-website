import React from 'react';
import Fade from 'react-reveal/Fade';
import { FADE_DELAY } from '.';
import { MiniCard, Card } from '../../../components/Card';
import mathspace_logo from '../../../static/mathspace_logo.png';

const TITLE = 'Mathspace';
const ROLE = 'Software Engineer';
const LABEL = '2017 - Present';
const Image = () => <img src={mathspace_logo} alt="" width={45} height={36} />;

type MiniCardProps = {|
  onClick: () => void
|};

export const MathspaceMiniCard = ({ onClick }: MiniCardProps) => (
  <Fade delay={FADE_DELAY}>
    <MiniCard title={TITLE} label={LABEL} onClick={onClick}>
      <Image />
    </MiniCard>
  </Fade>
);

export const MathspaceCard = () => (
  <Fade delay={FADE_DELAY}>
    <Card title={ROLE} label={LABEL} image={<Image />}>
      <p>
        Mathspace is on a mission to take the boring one-size-fits-all
        mathematics textbook and turn it into a personalised interactive
        journey, helping students learn mathematics one step at a time and
        helping teachers transform their classroom into a 21st century
        experience.
      </p>
      <p>
        My role is to transform our data into meaningful student insights for
        teachers so that they can better address student needs. Working in a
        fast paced and agile environment allows me to roll these product changes
        out quickly and see the broader impacts my work has on mathematics
        education.
      </p>
    </Card>
  </Fade>
);
