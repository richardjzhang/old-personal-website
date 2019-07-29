// @flow
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as contentful from 'contentful';
import moment from 'moment';

import { PANEL_MIN_HEIGHT } from '../.';
import Panel from '../../../components/Panel';
import {
  BASE_UNIT,
  colors,
  fontSize,
  fontWeight
} from '../../../utils/themes.jsx';
import { formatDuration } from '../../../utils/duration.jsx';

const PanelWrapper = styled.div`
  padding-top: ${16 * BASE_UNIT}px;
  padding-bottom: ${16 * BASE_UNIT}px;
  max-width: 60%;
`;

const BlogItem = styled.div`
  &:not(:last-child) {
    margin-top: ${16 * BASE_UNIT}px;
  }

  &:not(:last-child) {
    margin-bottom: ${16 * BASE_UNIT}px;
  }
`;

const BlogTitle = styled.div`
  font-size: ${fontSize.xlarge}px;
  font-weight: ${fontWeight.bold};
  color: ${colors.lightDodgerBlue};
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
      backgroundColor={colors.brightGray}
      minHeight={PANEL_MIN_HEIGHT}
      isCentered
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
