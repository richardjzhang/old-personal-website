import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import mathspace_logo from '../../static/mathspace_logo.png';
import s4s_logo from '../../static/s4s_logo.png';
import smash_logo from '../../static/smash_logo.png';
import usyd_logo from '../../static/usyd_logo.png';
import kpmg_logo from '../../static/kpmg_logo.png';
import b_inspiring_logo from '../../static/b_inspiring_logo.png';
import Panel from '../../components/Panel';
import { MiniCard } from '../../components/Card';
import { PANEL_MIN_HEIGHT } from '.';

import { BASE_UNIT, breakPoints, colors } from '../../utils/themes.jsx';

const PanelWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap ${8 * BASE_UNIT}px;
  color: ${colors.tropicalBlue};

  @media (min-width: ${breakPoints.medium}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Journey = () => (
  <Panel
    minHeight={PANEL_MIN_HEIGHT}
    backgroundColor={colors.dodgerBlue}
    isCentered
    paddingTop={`${14 * BASE_UNIT}px`}
    paddingRight={`${14 * BASE_UNIT}px`}
    paddingBottom={`${14 * BASE_UNIT}px`}
    paddingLeft={`${14 * BASE_UNIT}px`}
  >
    <PanelWrapper>
      <Fade delay={400}>
        <MiniCard title="University of Sydney" label="2013 - 2018">
          <img src={usyd_logo} alt="" width={100} height={35} />
        </MiniCard>
      </Fade>
      <Fade delay={400}>
        <MiniCard title="S4S Coaching" label="2013 - 2017">
          <img src={s4s_logo} alt="" width={50} height={42} />
        </MiniCard>
      </Fade>
      <Fade delay={400}>
        <MiniCard title="SMASH Inc." label="2014 - 2015">
          <img src={smash_logo} alt="" width={100} height={20} />
        </MiniCard>
      </Fade>
      <Fade delay={400}>
        <MiniCard title="B.Inspiring Inc." label="2015 - 2016">
          <img
            src={b_inspiring_logo}
            alt=""
            width={45}
            height={45}
            style={{ borderRadius: '100px' }}
          />
        </MiniCard>
      </Fade>
      <Fade delay={400}>
        <MiniCard title="KPMG" label="2016 - 2017">
          <img src={kpmg_logo} alt="" width={100} height={42} />
        </MiniCard>
      </Fade>
      <Fade delay={400}>
        <MiniCard title="Mathspace" label="2017 - Present">
          <img src={mathspace_logo} alt="" width={45} height={36} />
        </MiniCard>
      </Fade>
    </PanelWrapper>
  </Panel>
);

export default Journey;
