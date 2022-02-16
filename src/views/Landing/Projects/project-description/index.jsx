import React from 'react';
import useMedia from 'use-media';
import arrowRight from 'assets/arrow-right.svg';
import externalLink from 'assets/external-link.svg';
import Separator from 'components/Separator';
import { breakPoints } from 'utils/themes';
import {
  Description,
  ExternalLink,
  Footer,
  Image,
  Link,
  LinkIcon,
  NextButton,
  Title
} from './styles';

function ProjectDescription({
  description,
  image,
  link,
  nextProject,
  project
}) {
  const isMobile = useMedia({ maxWidth: breakPoints.medium });
  return (
    <div>
      <Title>
        {isMobile ? (
          <React.Fragment>
            <div>{project}</div>
            <Separator size={2} />
            <a href={link} target="_blank">
              <ExternalLink src={externalLink} />
            </a>
          </React.Fragment>
        ) : (
          'Overview'
        )}
      </Title>
      <Separator size={2} />
      <Description>{description}</Description>
      <Separator size={8} />
      <Image alt="Project image" src={image} />
      <Separator size={8} />
      <Footer>
        {isMobile ? (
          <NextButton onClick={nextProject}>
            Next
            <Separator size={2} />
            <LinkIcon alt="Arrow" src={arrowRight} />
          </NextButton>
        ) : (
          <Link href={link} target="_blank">
            Go to app
            <Separator size={2} />
            <LinkIcon alt="Arrow" src={arrowRight} />
          </Link>
        )}
      </Footer>
    </div>
  );
}

export default ProjectDescription;
