import React from 'react';
import styled from 'styled-components';

import { colors, fontWeight } from 'utils/themes';

import Panel, {
  ColumnWrapper as Wrapper,
  Column,
  ColumnSeparator
} from 'components/Panel';
import { urls } from 'utils/urls';
import website_code from 'static/website_code.svg';

import { Image, Description, Separator, Button, ButtonLink } from './styles';

const Link = styled.a`
  color: ${colors.cloudBurst};
  font-weight: ${fontWeight.semibold};
  text-transform: none;
  text-decoration: none;
`;

const About = () => (
  <Panel>
    <Wrapper>
      <Column width="60%">
        <Image src={website_code} alt="website" />
      </Column>
      <ColumnSeparator />
      <Column width="40%">
        <Description>
          I'm a frontend engineer based in Sydney and I'm currently helping to
          shape the future of mathematics education{' '}
          <Link href={urls.mathspace}>@Mathspace</Link>.
        </Description>
        <Separator small />
        <Description>
          If you want to get in touch about anything at all, feel free to send
          me a message &#128516;.
        </Description>
        <Separator large />
        <Button>
          <ButtonLink href={urls.mailTo}>Get in touch</ButtonLink>
        </Button>
      </Column>
    </Wrapper>
  </Panel>
);
export default About;
