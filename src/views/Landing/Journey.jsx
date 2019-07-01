import React from 'react';
import styled from 'styled-components';
import Panel from '../../components/Panel';
import Timeline from '../../components/VerticalTimeline';
import { PANEL_HEIGHT } from '.';

import { colors } from '../../utils/themes.jsx';

const PanelWrapper = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  color: ${colors.tropicalBlue};
`;

const Journey = () => (
  <Panel height={PANEL_HEIGHT} backgroundColor={colors.lochmara}>
    <PanelWrapper>
      <Timeline />
    </PanelWrapper>
  </Panel>
);

export default Journey;
