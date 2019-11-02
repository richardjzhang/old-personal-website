import React from 'react';
import styled from 'styled-components';

import Panel, {
  ColumnWrapper as Wrapper,
  Column,
  ColumnSeparator
} from 'components/Panel';
import {
  BASE_UNIT,
  borderRadius,
  colors,
  fontSize,
  fontWeight,
  lineHeight
} from 'utils/themes';
import { urls } from 'utils/urls';
import website_code from 'static/website_code.svg';

const Image = styled.img`
  width: 100%;
`;

const Description = styled.div`
  font-size: ${fontSize.xmedium}px;
  line-height: ${lineHeight.description};
  color: ${colors.cloudBurst};
`;

const Separator = styled.div(props => ({
  flexShrink: 0,
  ...(props.small
    ? {
        height: 4 * BASE_UNIT,
        width: 4 * BASE_UNIT
      }
    : {}),
  ...(props.large
    ? {
        height: 8 * BASE_UNIT,
        width: 8 * BASE_UNIT
      }
    : {})
}));

const Link = styled.a`
  color: ${colors.cloudBurst};
  font-weight: ${fontWeight.semibold};
  text-transform: none;
  text-decoration: none;
`;

const Button = styled.div`
  padding: ${4 * BASE_UNIT}px ${4 * BASE_UNIT}px;
  max-width: ${32 * BASE_UNIT}px;
  color: ${colors.cloudBurst};
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.semibold};
  border: 1px solid ${colors.cloudBurst};
  border-radius: ${borderRadius.regular}px;
  cursor: pointer;
`;

const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: ${colors.cloudBurst};
  text-transform: none;
  text-decoration: none;
`;

const About = () => (
  <Panel isCenteredVertically isCenteredHorizontally isPositionRelative>
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
