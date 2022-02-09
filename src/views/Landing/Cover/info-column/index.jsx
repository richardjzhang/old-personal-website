import React from 'react';
import Fade from 'react-reveal/Fade';
import Separator from 'components/Separator';
import SocialIcon, { SocialIcons } from 'components/SocialIcon';
import { urls } from 'utils/urls';
import { Root, Description, Title } from './styles';

const FADE_DELAY = 300;
const FADE_DURATION = 1000;

const InfoColumn = () => (
  <Root>
    <Separator size={10} />
    <Title>
      <Fade delay={FADE_DELAY + FADE_DURATION} duration={FADE_DURATION} bottom>
        Hello, I'm Richard
      </Fade>
    </Title>
    <Separator size={8} />
    <Description>
      <Fade
        delay={FADE_DELAY + 2 * FADE_DURATION}
        duration={FADE_DURATION}
        bottom
      >
        I'm a software engineer living in Sydney, Australia working at RangeMe.
        I like to come up with wacky ideas and make them happen.
      </Fade>
    </Description>
    <Separator size={10} />
    <Fade delay={FADE_DELAY + 3 * FADE_DURATION}>
      <SocialIcons>
        <SocialIcon url={urls.mailTo} />
        <SocialIcon url={urls.linkedIn} />
        <SocialIcon url={urls.github} />
        <SocialIcon url={urls.medium} />
      </SocialIcons>
    </Fade>
  </Root>
);

export default InfoColumn;
