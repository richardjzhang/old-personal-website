// @flow
import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as contentful from 'contentful';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

import { formatDuration } from '../../utils/duration.jsx';
import {
  BASE_UNIT,
  colors,
  fontSize,
  fontWeight,
  lineHeight
} from '../../utils/themes.jsx';
import Error from '../Error';
import Loading from '../Loading';
import SubscribeForm from '../../components/SubscribeForm';

const Root = styled.div`
  padding: ${12 * BASE_UNIT}px ${15 * BASE_UNIT}px;
  min-height: 100vh;
  background-color: ${colors.mirage};
`;

const Wrapper = styled.div`
  max-width: 650px;
  margin: 0 auto;
`;

const HomeLink = styled.div`
  font-size: ${fontSize.large}px;
  font-weight: ${fontWeight.bold};
  color: ${colors.malibu};
  margin-bottom: ${15 * BASE_UNIT}px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: ${fontSize.xxlarge}px;
  font-weight: ${fontWeight.bold};
  color: ${colors.white};
`;

const Status = styled.div`
  display: flex;
  margin-top: ${3 * BASE_UNIT}px;
  font-size: ${fontSize.normal}px;
  color: ${colors.iron};
`;

const StatusSeparator = styled.div`
  text-align: center;
  width: ${4 * BASE_UNIT}px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  line-height: ${lineHeight.description};
  color: ${colors.porcelain};
`;

const CoverWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${8 * BASE_UNIT}px;
  margin-bottom: ${8 * BASE_UNIT}px;
`;

const Image = styled.img`
  width: 75%;
  height: 75%;
  object-fit: cover;
`;

const {
  REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  REACT_APP_CONTENTFUL_SPACE_TOKEN
} = process.env;

type Props = {|
  match: {
    params: {
      path: string
    }
  }
|};

const client = contentful.createClient({
  space: REACT_APP_CONTENTFUL_SPACE_TOKEN,
  accessToken: REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

const fetch = (path: string) => {
  const [blogContent, setBlogContent] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  ReactGA.pageview(path);

  const fetchData = async () => {
    try {
      setLoading(true);
      const entries = await client.getEntries({
        content_type: 'blog',
        'fields.path': path
      });
      setBlogContent(entries.items);
    } catch (e) {
      setError(e);
    } finally {
      window.setTimeout(() => setLoading(false), 500);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [blogContent, error, loading];
};

const BlogArticle = ({
  match: {
    params: { path }
  }
}: Props) => {
  const [blogContent, error, loading] = fetch(path);
  if (loading) return <Loading />;
  if (blogContent == null) return null;
  if (blogContent.length === 0 || error) return <Error />;

  const {
    title,
    length,
    contentMarkdown,
    cover_image: {
      fields: {
        file: { url: coverImage }
      }
    }
  } = blogContent[0].fields;
  const { createdAt } = blogContent[0].sys;

  return (
    <Root>
      <Wrapper>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <HomeLink>Home</HomeLink>
        </Link>
        <Title>{title}</Title>
        <Status>
          {moment(new Date(createdAt)).format('DD MMMM, YYYY')}{' '}
          <StatusSeparator>•</StatusSeparator> {formatDuration(length, 'h m')}{' '}
          read
        </Status>
        <Content>
          <CoverWrapper>
            <Image src={coverImage} />
          </CoverWrapper>
          <ReactMarkdown source={contentMarkdown} />
        </Content>
        <SubscribeForm />
      </Wrapper>
    </Root>
  );
};

export default BlogArticle;
