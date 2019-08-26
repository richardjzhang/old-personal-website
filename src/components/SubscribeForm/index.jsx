// @flow
import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import {
  BASE_UNIT,
  borderRadius,
  colors,
  fontSize,
  fontWeight,
  lineHeight,
  fontFamily
} from '../../utils/themes.jsx';
import paperPlane from '../../static/paper-plane.svg';

const Container = styled.div`
  margin-top: ${12 * BASE_UNIT}px;
  width: 100%;
  border-radius: ${borderRadius.regular}px;
  display: flex;
  background-color: ${colors.white};
  box-shadow: 0 2px 15px 0 rgba(210, 214, 220, 0.5);
  overflow: hidden;
`;

const SuccessBox = styled.div`
  padding: ${8 * BASE_UNIT}px;
  max-height: 400px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const PlaneImage = styled.img`
  height: 40%;
  width: 40%;
  margin-bottom: ${10 * BASE_UNIT}px;
`;

const SuccessText = styled.div`
  margin-bottom: ${6 * BASE_UNIT}px;
  font-size: ${fontSize.xlarge}px;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.description};
  color: ${colors.cloudBurst};
`;

const Column = styled.div`
  padding: ${12 * BASE_UNIT}px;
  width: 50%;
`;

const Title = styled.div`
  margin-bottom: ${5 * BASE_UNIT}px;
  font-family: ${fontFamily.body};
  font-size: ${fontSize.xmedium}px;
  font-weight: ${fontWeight.semibold};
  line-height: ${lineHeight.description};
  color: ${colors.cloudBurst};
`;

const Description = styled.div`
  font-family: ${fontFamily.body};
  line-height: ${lineHeight.description};
  color: ${colors.paleSky};
`;

const InputWrapper = styled.div`
  &:first-child {
    margin-bottom: ${3 * BASE_UNIT}px;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: ${3 * BASE_UNIT}px;
  width: 100%;
  border: 1px solid ${colors.iron};
  border-radius: ${borderRadius.regular}px;
  box-sizing: border-box;
  font-size: ${fontSize.medium}px;
  line-height: ${lineHeight.description};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${colors.iron};
  }
  outline: none;
`;

const Button = styled.div`
  margin-top: ${6 * BASE_UNIT}px;
  margin-bottom: ${6 * BASE_UNIT}px;
  padding: ${3 * BASE_UNIT}px ${6 * BASE_UNIT}px;
  border-radius: ${borderRadius.circle}px;
  display: inline-block;
  background-color: ${colors.cornflowerBlue};
  cursor: pointer;
  font-size: ${fontSize.normal}px;
  font-weight: ${fontWeight.semibold};
  color: ${colors.white};
`;

const Disclaimer = styled.div`
  font-family: ${fontFamily.body};
  font-size: 13px;
  line-height: ${lineHeight.description};
  color: ${colors.paleSky};
`;

type CustomFormProps = {|
  status: 'success' | 'error' | 'sending',
  message: String,
  onValidated: ({ EMAIL: string, NAME: string }) => void,
  hasSubscribed: boolean
|};

// a basic form
const CustomForm = ({
  status,
  message,
  onValidated,
  hasSubscribed
}: CustomFormProps) => {
  let email, name;
  const handleSubscribe = () =>
    email &&
    name &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <Container>
      {hasSubscribed ? (
        <SuccessBox>
          <PlaneImage src={paperPlane} alt="paper-plane" />
          <SuccessText>Thanks for subscribing!</SuccessText>
          <Description>You'll hear from me soon :)</Description>
        </SuccessBox>
      ) : (
        <React.Fragment>
          {' '}
          <Column style={{ backgroundColor: colors.athensGrey }}>
            <Title>Want to keep up with what I'm up to?</Title>
            <Description>
              Subscribe to get my latest random thoughts
            </Description>
          </Column>
          <Column>
            <React.Fragment>
              <InputWrapper>
                <Input
                  ref={node => (name = node)}
                  type="text"
                  placeholder="Your name"
                />
              </InputWrapper>
              <InputWrapper>
                <Input
                  ref={node => (email = node)}
                  type="email"
                  placeholder="Your email"
                />
              </InputWrapper>
              <Button onClick={handleSubscribe}>Subscribe</Button>
              <Disclaimer>
                If you change your mind later, no worries. You can unsubscribe
                whenever you like.
              </Disclaimer>
            </React.Fragment>
          </Column>
        </React.Fragment>
      )}
    </Container>
  );
};

const SubscribeForm = () => {
  const [hasSubscribed, setSubscribed] = useState(false);
  const url =
    'https://outlook.us3.list-manage.com/subscribe/post?u=f1f5e578c46c0a45d58e5c009&amp;id=bb60db5f2c';
  return (
    <Fade>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => {
              subscribe(formData);
              setSubscribed(true);
            }}
            hasSubscribed={hasSubscribed}
          />
        )}
      />
    </Fade>
  );
};

export default SubscribeForm;
