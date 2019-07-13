import React from 'react';
import Fade from 'react-reveal/Fade';
import { FADE_DELAY } from '.';
import { MiniCard, Card } from '../../../components/Card';
import kpmg_logo from '../../../static/kpmg_logo.png';

const TITLE = 'KPMG';
const ROLE = 'Intern';
const LABEL = '2016 - 2017';
const Image = () => <img src={kpmg_logo} alt="" width={100} height={42} />;

type MiniCardProps = {|
  onClick: () => void
|};

export const KPMGMiniCard = ({ onClick }: MiniCardProps) => (
  <Fade delay={FADE_DELAY}>
    <MiniCard title={TITLE} label={LABEL} onClick={onClick}>
      <Image />
    </MiniCard>
  </Fade>
);

export const KPMGCard = () => (
  <Fade delay={FADE_DELAY}>
    <Card title={ROLE} label={LABEL} image={<Image />}>
      <p>
        KPMG is a professional services firm with global reach, and deep
        expertise in audit and assurance, tax and advisory. The Technology Risk
        group at KPMG has deep experience and skills to help clients better
        comprehend and manage technology, cyber and information risks.
      </p>
      <p>
        During my time here, I supported the work of senior members of the team
        and was given the opportunity to check off on project deliverables with
        clients in face to face meetings.
      </p>
    </Card>
  </Fade>
);
