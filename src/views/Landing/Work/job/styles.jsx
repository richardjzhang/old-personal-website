import styled from 'styled-components';
import { borderRadius, colors, fontWeight, lineHeight } from 'utils/themes';

const Date = styled.div({
  color: colors.blueBayoux,
  fontWeight: fontWeight.semibold,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap'
});

const Description = styled.div({
  color: colors.honorNight,
  fontSize: 20,
  lineHeight: lineHeight.description
});

const MobileSkills = styled.div({
  color: colors.cloudBurst
});

const Root = styled.div({
  display: 'flex',
  width: '100%'
});

const Skill = styled.div({
  backgroundColor: colors.cloudBurst,
  borderRadius: borderRadius.circle,
  color: colors.white,
  margin: 4,
  padding: '8px 16px'
});

const Skills = styled.div({
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  margin: -4
});

const Subtitle = styled.div({
  color: colors.blueBayoux,
  fontWeight: fontWeight.semibold,
  textTransform: 'uppercase'
});

const Title = styled.div({
  color: colors.honorNight,
  fontSize: 28,
  fontWeight: fontWeight.semibold,
  lineHeight: lineHeight.title
});

export {
  Date,
  Description,
  MobileSkills,
  Root,
  Skill,
  Skills,
  Subtitle,
  Title
};
