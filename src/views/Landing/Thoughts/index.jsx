// @flow
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as contentful from 'contentful';
import moment from 'moment';

import Panel from '../../../components/Panel';
import {
  BASE_UNIT,
  breakPoints,
  colors,
  fontSize,
  fontWeight
} from '../../../utils/themes.jsx';
import { formatDuration } from '../../../utils/duration.jsx';

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
`;
const BlogStatus = styled.div`
  display: flex;
  margin-top: ${3 * BASE_UNIT}px;
  font-size: ${fontSize.normal}px;
  color: ${colors.iron};
`;
const StatusSeparator = styled.div`
  text-align: center;
  width: ${4 * BASE_UNIT}px;
`;

const BlogSpoiler = styled.div`
  margin-top: ${2 * BASE_UNIT}px;
  font-size: ${fontSize.medium}px;
  color: ${colors.white};
`;

const Thoughts = () => {
  const [posts, setPosts] = useState(null);
  const client = contentful.createClient({
    space: 'fjnh1kuhre2f',
    accessToken: 'L8k0nAE0DAydMWaUfDz99LBDABmVVxML-puJR2D1TpQ'
  });

  useEffect(() => {
    client
      .getEntries({ content_type: 'blog' })
      .then(entries => setPosts(entries.items));
  }, []);

  if (posts == null) return null;

  return (
    <Panel
      minHeight="100vh"
      backgroundColor={colors.mirage}
      paddingLeft={15 * BASE_UNIT}
      paddingRight={15 * BASE_UNIT}
      paddingBottom={25 * BASE_UNIT}
      isCenteredVertically
      isCenteredHorizontally
    >
      <PanelWrapper>
        {posts.map(
          ({
            sys: { id, createdAt },
            fields: { title, path, content, spoiler, length }
          }) => (
            <BlogItem key={id}>
              <BlogTitle>{title}</BlogTitle>
              <BlogStatus>
                {moment(new Date(createdAt)).format('DD MMMM, YYYY')}{' '}
                <StatusSeparator>•</StatusSeparator>{' '}
                {formatDuration(length, 'h m')} read
              </BlogStatus>
              <BlogSpoiler>{spoiler}</BlogSpoiler>
            </BlogItem>
          )
        )}
      </PanelWrapper>
    </Panel>
  );
};

export default Thoughts;
