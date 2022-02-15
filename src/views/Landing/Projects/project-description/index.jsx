import React from 'react';
import arrowRight from 'assets/arrow-right.svg';
import Separator from 'components/Separator';
import {
  Description,
  Image,
  Link,
  LinkIcon,
  LinkSection,
  Title
} from './styles';

function ProjectDescription({ description, image, link }) {
  return (
    <div>
      <Title>Overview</Title>
      <Separator size={2} />
      <Description>{description}</Description>
      <Separator size={8} />
      <Image alt="Project image" src={image} />
      <Separator size={8} />
      <LinkSection>
        <Link href={link} target="_blank">
          Go to app
          <Separator size={2} />
          <LinkIcon alt="Arrow" src={arrowRight} />
        </Link>
      </LinkSection>
    </div>
  );
}

export default ProjectDescription;
