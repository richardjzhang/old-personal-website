import React from 'react';
import Fade from 'react-reveal/Fade';

import Panel, {
  ColumnWrapper as Wrapper,
  Column,
  ColumnSeparator
} from 'components/Panel';
import art_museum from 'static/art_museum.svg';

import {
  FADE_DELAY,
  Image,
  Description,
  Separator,
  Button,
  ButtonLink
} from './styles';

const Creations = () => (
  <Panel>
    <Wrapper>
      <Column width="40%">
        <Fade left delay={FADE_DELAY}>
          <Description>
            Being primarily a product engineer, most of my work has been focused
            on building valuable and pragmatic experiences for users. I'm proud
            to say that in many of these projects I made critical decisions that
            ultimately contributed to higher user satisfaction.
          </Description>
          <Separator large />
          <Button>
            <ButtonLink>Read more</ButtonLink>
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
