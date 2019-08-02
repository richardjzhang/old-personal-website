import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import Panel from '../../../components/Panel';
import {
  BASE_UNIT,
  breakPoints,
  borderRadius,
  colors,
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

const SectionTitle = styled.div`
  margin-bottom: ${6 * BASE_UNIT}px;
  font-size: ${fontSize.xxlarge}px;
  font-weight: ${fontWeight.bold};
  color: ${colors.athensGrey};

  @media (max-width: ${breakPoints.small}px) {
    font-size: ${fontSize.xmedium}px;
  }
`;

const SectionDescription = styled.div`
  font-size: 18px;
  line-height: ${lineHeight.description};
  color: ${colors.white};
`;

const Link = styled.a`
  color: ${colors.dodgerBlue};
  text-transform: none;
  text-decoration: none;

  &:hover {
    color: ${hoverColors.dodgerBlue};
    transition: background-color 0.5s ease;
  }
`;

const Button = styled.div`
  margin-top: ${10 * BASE_UNIT}px;
  padding: ${4 * BASE_UNIT}px ${8 * BASE_UNIT}px;
  font-size: ${fontSize.xmedium}px;
  font-weight: ${fontWeight.semibold};
  background-color: ${colors.cornflowerBlue};
  border-radius: ${borderRadius.regular}px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02) translateZ(0);
    transition: transform 0.1s linear;
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
    paddingTop={15 * BASE_UNIT}
    paddingRight={15 * BASE_UNIT}
    paddingLeft={15 * BASE_UNIT}
  >
    <Section>
      <Fade>
        <SectionTitle>What I'm up to</SectionTitle>
        <SectionDescription>
          I'm a software engineer based in Sydney. I'm currently creating the
          future of mathematics education{' '}
          <Link href={urls.mathspace}>@Mathspace</Link> as a frontend engineer.
        </SectionDescription>
      </Fade>
    </Section>
    <Section>
      <Fade>
        <SectionTitle>What I can do</SectionTitle>
        <SectionDescription>
          By focusing on your goals, I create amazing web interfaces and apps
          that convey your message.
        </SectionDescription>
      </Fade>
    </Section>
    <Section>
      <Fade>
        <SectionTitle>Let's work together</SectionTitle>
        <SectionDescription>
          If you have a website or project you need help getting started, or
          simply want to say hi, send me a message.
        </SectionDescription>
      </Fade>
    </Section>
    <Button>
      <ButtonLink href={urls.mailTo}>Get in touch</ButtonLink>
    </Button>
  </Panel>
);
export default About;
