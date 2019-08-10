// @flow
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as contentful from 'contentful';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

import { formatDuration } from '../../utils/duration.jsx';
import {
  BASE_UNIT,
  breakPoints,
  colors,
  fontSize,
  fontWeight,
  lineHeight
} from '../../utils/themes.jsx';

const Root = styled.div`
  padding: ${12 * BASE_UNIT}px ${8 * BASE_UNIT}px;
  min-height: 100vh;
  background-color: ${colors.mirage};
`;

const Wrapper = styled.div`
  max-width: 50%;
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
  margin-bottom: ${8 * BASE_UNIT}px;
  font-size: ${fontSize.normal}px;
  color: ${colors.iron};
`;

const StatusSeparator = styled.div`
  text-align: center;
  width: ${4 * BASE_UNIT}px;
`;

const Content = styled.div`
  line-height: ${lineHeight.description};
  color: ${colors.porcelain};
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

const BlogArticle = ({
  match: {
    params: { path }
  }
}: Props) => {
  const [blogContent, setBlogContent] = useState([]);
  const client = contentful.createClient({
    space: REACT_APP_CONTENTFUL_SPACE_TOKEN,
    accessToken: REACT_APP_CONTENTFUL_ACCESS_TOKEN
  });

  useEffect(() => {
    client
      .getEntries({ content_type: 'blog', 'fields.path': path })
      .then(entries => setBlogContent(entries.items));
  }, []);

  if (blogContent.length === 0) return null;

  const { title, length, contentMarkdown } = blogContent[0].fields;
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
          <ReactMarkdown source={contentMarkdown} />
        </Content>
      </Wrapper>
    </Root>
  );
};

export default BlogArticle;
