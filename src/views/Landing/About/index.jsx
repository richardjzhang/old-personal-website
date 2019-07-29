import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import Panel from '../../../components/Panel';
import { PANEL_MIN_HEIGHT } from '../.';
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
  margin-bottom: ${14 * BASE_UNIT}px;
  max-width: 600px;
  text-align: left;
`;

const SectionTitle = styled.div`
  margin-bottom: ${4 * BASE_UNIT}px;
  font-size: ${fontSize.xlarge}px;
  font-weight: ${fontWeight.bold};
  color: ${colors.athensGrey};

  @media (max-width: ${breakPoints.medium}px) {
    font-size: ${fontSize.large}px;
  }

  @media (max-width: ${breakPoints.small}px) {
    font-size: ${fontSize.xmedium}px;
  }
`;

const SectionDescription = styled.div`
  font-size: ${fontSize.medium}px;
  line-height: ${lineHeight.SectionDescription};
  color: ${colors.white};

  @media (max-width: ${breakPoints.small}px) {
    font-size: ${fontSize.normal}px;
  }
`;

const Link = styled.a`
  color: ${colors.dodgerBlue};
  font-weight: ${fontWeight.semibold};
  text-transform: none;
  text-decoration: none;

  &:hover {
    color: ${hoverColors.dodgerBlue};
    transition: background-color 0.5s ease;
  }
`;

const Button = styled.div`
  height: 45px;
  width: 150px;
  margin-top: ${12 * BASE_UNIT}px;
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.light};
  background-color: ${colors.dodgerBlue};
  border-radius: ${borderRadius.regular}px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${hoverColors.dodgerBlue};
    transition: background-color 0.5s ease;
  }

  @media (max-width: ${breakPoints.large}px) {
    height: 35px;
    width: 120px;
    font-size: ${fontSize.normal}px;
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
    minHeight={PANEL_MIN_HEIGHT}
    isCentered
    paddingTop={15 * BASE_UNIT}
    paddingRight={15 * BASE_UNIT}
    paddingBottom={15 * BASE_UNIT}
    paddingLeft={15 * BASE_UNIT}
  >
    <Fade>
      <Section>
        <SectionTitle>What I'm up to</SectionTitle>
        <SectionDescription>
          I'm a software engineer based in Sydney. I'm currently creating the
          future of mathematics education{' '}
          <Link href={urls.mathspace}>@Mathspace</Link> as a frontend engineer.
        </SectionDescription>
      </Section>
    </Fade>
    <Fade>
      <Section>
        <SectionTitle>What I can do</SectionTitle>
        <SectionDescription>
          By focusing on your goals, I create amazing web interfaces and apps
          that convey your message.
        </SectionDescription>
      </Section>
    </Fade>
    <Fade>
      <Section>
        <SectionTitle>Let's work together</SectionTitle>
        <SectionDescription>
          If you have a website or project you need help getting started, or
          simply want to say hi, send me a message.
        </SectionDescription>
        <Button>
          <ButtonLink href={urls.mailTo}>Message me</ButtonLink>
        </Button>
      </Section>
    </Fade>
  </Panel>
);
export default About;
