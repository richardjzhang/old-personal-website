import React from 'react';
import Fade from 'react-reveal/Fade';

import Panel, {
  ColumnWrapper as Wrapper,
  Column,
  ColumnSeparator
} from 'components/Panel';
import code_thinking from 'static/code_thinking.svg';
import { colors } from 'utils/themes';

import {
  FADE_DELAY,
  Image,
  Description,
  Separator,
  Button,
  ButtonLink
} from './styles';

const Thoughts = () => (
  <Panel backgroundColor={colors.downy}>
    <Wrapper>
      <Column width="60%">
        <Fade delay={FADE_DELAY}>
          <Image src={code_thinking} alt="thoughts" />
        </Fade>
      </Column>
      <ColumnSeparator />
      <Column width="40%">
        <Fade delay={FADE_DELAY}>
          <Description>
            In my spare time, I enjoy thinking through difficult problems and
            writing down what I learnt. Check out what I have to say.
          </Description>
          <Separator large />
          <Button>
            <ButtonLink>Read more</ButtonLink>
          </Button>
        </Fade>
      </Column>
    </Wrapper>
  </Panel>
);
export default Thoughts;
