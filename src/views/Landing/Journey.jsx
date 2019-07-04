import React from 'react';
import styled from 'styled-components';
import mathspace_logo from '../../static/mathspace_logo.png';
import Panel from '../../components/Panel';
import { MiniCard } from '../../components/Card';
import { PANEL_HEIGHT } from '.';

import { colors } from '../../utils/themes.jsx';

const PanelWrapper = styled.div`
  display: flex;
  position: relative;
  color: ${colors.tropicalBlue};
`;

const Journey = () => (
  <Panel height={PANEL_HEIGHT} backgroundColor={colors.lochmara}>
    <PanelWrapper>
      <MiniCard title="Mathspace" label="2017 - Present">
        <img src={mathspace_logo} alt="" width={45} height={36} />
      </MiniCard>
    </PanelWrapper>
  </Panel>
);

export default Journey;
