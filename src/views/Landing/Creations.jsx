import React from 'react';

import Panel, {
  ColumnWrapper as Wrapper,
  Column,
  ColumnSeparator
} from 'components/Panel';
import art_museum from 'static/art_museum.svg';

import { Image, Description, Separator, Button, ButtonLink } from './styles';

type Props = {|
  setCreationsRef: () => void
|};

const Creations = ({ setCreationsRef }: Props) => (
  <Panel>
    <Wrapper>
      <Column width="40%">
        <Description>
          Being primarily a product engineer, most of my work has been focused
          on building valuable and pragmatic experiences for users. I'm proud to
          say that in many of these projects I made critical decisions that
          ultimately contributed to higher user satisfaction.
        </Description>
        <Separator large />
        <Button>
          <ButtonLink>Read more</ButtonLink>
        </Button>
      </Column>
      <ColumnSeparator />
      <Column width="60%">
        <Image src={art_museum} alt="website" />
      </Column>
    </Wrapper>
  </Panel>
);

export default Creations;
