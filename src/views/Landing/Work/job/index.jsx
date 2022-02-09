import React from 'react';
import Media from 'components/Media';
import Separator from 'components/Separator';
import { breakPoints } from 'utils/themes';
import {
  Date,
  Description,
  MobileSkills,
  Root,
  Skill,
  Skills,
  Subtitle,
  Title
} from './styles';

function Job(props) {
  return (
    <Media query={`(max-width: ${breakPoints.medium}px)`}>
      {isMobile =>
        isMobile ? (
          <div>
            <Title>{props.title}</Title>
            <Separator size={2} />
            <Date>{props.date}</Date>
            <Separator size={4} />
            <Description>{props.description}</Description>
            <Separator size={8} />
            <Subtitle>Tools</Subtitle>
            <Separator size={2} />
            <MobileSkills>{props.skills.join(', ')}</MobileSkills>
          </div>
        ) : (
          <Root>
            <div>
              <Title>{props.title}</Title>
              <Separator size={2} />
              <Date>{props.date}</Date>
            </div>
            <Separator size={20} />
            <div>
              <Description>{props.description}</Description>
              <Separator size={8} />
              <Skills>
                {props.skills.map(skill => (
                  <Skill key={skill}>{skill}</Skill>
                ))}
              </Skills>
            </div>
          </Root>
        )
      }
    </Media>
  );
}

export default Job;
