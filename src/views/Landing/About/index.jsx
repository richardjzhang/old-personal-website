import React from 'react';
import styled from 'styled-components';

import Panel from '../../../components/Panel';
import {
  BASE_UNIT,
  borderRadius,
  boxShadow,
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  hoverColors,
  lineHeight
} from '../../../utils/themes.jsx';
import { urls } from '../../../utils/urls';

const Section = styled.div`
  max-width: 600px;
  text-align: center;

  &:not(:first-child) {
    margin-top: ${14 * BASE_UNIT}px;
  }
`;

const SectionDescription = styled.div`
  font-family: ${fontFamily.body};
  font-size: ${fontSize.xmedium}px;
  line-height: ${lineHeight.description};
  color: ${colors.porcelain};
`;

const Link = styled.a`
  color: ${colors.malibu};
  text-transform: none;
  text-decoration: none;
`;

const Button = styled.div`
  margin-top: ${10 * BASE_UNIT}px;
  padding: ${4 * BASE_UNIT}px ${8 * BASE_UNIT}px;
  font-size: ${fontSize.xmedium}px;
  font-weight: ${fontWeight.semibold};
  background-color: ${colors.cornflowerBlue};
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius.regular}px;
  cursor: pointer;

  &:hover {
    background-color: ${hoverColors.cornflowerBlue};
    transition: background-color 0.5s ease;
  }
`;

const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: ${colors.white};
`;

const About = () => (
  <Panel
    isCenteredVertically
    isCenteredHorizontally
    paddingRight={15 * BASE_UNIT}
    paddingLeft={15 * BASE_UNIT}
  >
    <Section>
      <SectionDescription>
        I'm a software engineer based in Sydney. I'm currently creating the
        future of mathematics education{' '}
        <Link href={urls.mathspace}>@Mathspace</Link> as a frontend engineer.
      </SectionDescription>
    </Section>
    <Section>
      <SectionDescription>
        If you have a website or project you need help getting started, or
        simply want to say hi, send me a message.
      </SectionDescription>
    </Section>
    <Button>
      <ButtonLink href={urls.mailTo}>Get in touch</ButtonLink>
    </Button>
  </Panel>
);
export default About;
