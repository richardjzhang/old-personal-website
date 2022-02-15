import styled from 'styled-components';
import { boxShadow, colors, fontWeight } from 'utils/themes';

const Description = styled.div({
  fontSize: 20
});

const Image = styled.img({
  borderRadius: 8,
  boxShadow,
  width: '100%'
});

const Link = styled.a({
  alignItems: 'center',
  backgroundColor: colors.cloudBurst,
  borderRadius: 8,
  boxShadow,
  color: colors.white,
  display: 'flex',
  fontSize: 20,
  marginLeft: 'auto',
  padding: '8px 16px',
  textDecoration: 'none'
});

const LinkIcon = styled.img({
  marginTop: 4,
  width: 16
});

const LinkSection = styled.div({
  display: 'flex',
  width: '100%'
});

const Title = styled.div({
  fontSize: 28,
  fontWeight: fontWeight.semibold
});

export { Description, Image, Link, LinkIcon, LinkSection, Title };
