import React from 'react';
import Fade from 'react-reveal/Fade';

import Panel, {
  ColumnWrapper as Wrapper,
  Column,
  ColumnSeparator
} from 'components/Panel';
import art_museum from 'static/art_museum.svg';
import { colors } from 'utils/themes';

import {
  FADE_DELAY,
  Image,
  Description,
  Separator,
  Button,
  ButtonLink
} from './styles';

const Creations = () => (
  <Panel backgroundColor={colors.geraldine}>
    <Wrapper>
      <Column width="40%">
        <Fade delay={FADE_DELAY}>
          <Description theme="light">
            Being primarily a product engineer, most of my work has been focused
            on building valuable and pragmatic user experiences. Any critical
            decisions I make are driven by data and user testing.
          </Description>
          <Separator large />
          <Button theme="light">
            <ButtonLink theme="light">Read more</ButtonLink>
          </Button>
        </Fade>
      </Column>
      <ColumnSeparator />
      <Column width="60%">
        <Fade delay={FADE_DELAY}>
          <Image src={art_museum} alt="creations" />
        </Fade>
      </Column>
    </Wrapper>
  </Panel>
);

export default Creations;
