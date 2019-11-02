// @flow
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as contentful from 'contentful';
import moment from 'moment';

import Panel from '../../components/Panel';
import {
  BASE_UNIT,
  breakPoints,
  colors,
  fontFamily,
  fontSize,
  fontWeight
} from '../../utils/themes.jsx';
import { formatDuration } from '../../utils/duration.jsx';
import Error from '../Error';

const {
  REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  REACT_APP_CONTENTFUL_SPACE_TOKEN
} = process.env;

const FADE_DELAY = 300;

const PanelWrapper = styled.div`
  @media (min-width: ${breakPoints.large}px) {
    max-width: 70%;
  }
`;

const BlogItem = styled.div`
  &:not(:first-child) {
    margin-top: ${16 * BASE_UNIT}px;
  }

  &:not(:last-child) {
    margin-bottom: ${16 * BASE_UNIT}px;
  }
`;

const BlogTitle = styled.div`
  font-size: ${fontSize.xxlarge}px;
  font-weight: ${fontWeight.bold};
  color: ${colors.malibu};
  cursor: pointer;
`;

const BlogStatus = styled.div`
  display: flex;
  margin-top: ${3 * BASE_UNIT}px;
  font-family: ${fontFamily.body};
  font-size: ${fontSize.normal}px;
  color: ${colors.iron};
`;

const StatusSeparator = styled.div`
  text-align: center;
  width: ${4 * BASE_UNIT}px;
`;

const BlogSpoiler = styled.div`
  margin-top: ${2 * BASE_UNIT}px;
  font-family: ${fontFamily.body};
  font-size: ${fontSize.medium}px;
  color: ${colors.white};
`;

const client = contentful.createClient({
  space: REACT_APP_CONTENTFUL_SPACE_TOKEN,
  accessToken: REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

const fetch = () => {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const entries = await client.getEntries({ content_type: 'blog' });
      setPosts(entries.items);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [posts, error];
};

const Thoughts = () => {
  const [posts, error] = fetch();
  if (posts == null) return null;
  if (posts.length === 0 || error) return <Error />;

  return (
    <Panel
      minHeight="100vh"
      padding={100}
      isCenteredVertically
      isCenteredHorizontally
    >
      <PanelWrapper>
        {posts.map(
          ({
            sys: { id, createdAt },
            fields: { title, path, spoiler, length }
          }) => (
            <Fade delay={FADE_DELAY} key={id}>
              <BlogItem>
                <Link to={`/blog/${path}`} style={{ textDecoration: 'none' }}>
                  <BlogTitle>{title}</BlogTitle>
                </Link>
                <BlogStatus>
                  {moment(new Date(createdAt)).format('DD MMMM, YYYY')}{' '}
                  <StatusSeparator>•</StatusSeparator>{' '}
                  {formatDuration(length, 'h m')} read
                </BlogStatus>
                <BlogSpoiler>{spoiler}</BlogSpoiler>
              </BlogItem>
            </Fade>
          )
        )}
      </PanelWrapper>
    </Panel>
  );
};

export default Thoughts;
