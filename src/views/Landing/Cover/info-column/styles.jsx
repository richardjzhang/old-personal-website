import styled from 'styled-components';
import {
  breakPoints,
  colors,
  fontSize,
  fontWeight,
  lineHeight
} from 'utils/themes';

const Root = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%'
});

const Description = styled.div`
  font-size: ${fontSize.xlarge}px;
  line-height: ${lineHeight.description};
  color: ${colors.honorNight};

  @media (max-width: ${breakPoints.small}px) {
    font-size: ${fontSize.large}px;
  }
`;

const Title = styled.div`
  display: ${props => props.isCentered && 'flex'};
  justify-content: ${props => props.isCentered && 'center'};
  font-weight: ${fontWeight.semibold};
  font-size: ${fontSize.xxxxlarge}px;
  line-height: ${lineHeight.title};
  color: ${colors.honorNight};

  @media (max-width: ${breakPoints.small}px) {
    font-size: ${fontSize.xxlarge}px;
  }
`;

export { Root, Description, Title };
