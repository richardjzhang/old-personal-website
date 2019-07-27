// @flow
import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';

const Thoughts = () => {
  const [posts, setPosts] = useState(null);
  const client = contentful.createClient({
    space: 'fjnh1kuhre2f',
    accessToken: 'L8k0nAE0DAydMWaUfDz99LBDABmVVxML-puJR2D1TpQ'
  });

  useEffect(() => {
    client.getEntries().then(entries => setPosts(entries.items));
  }, []);

  if (posts == null) return null;

  return (
    // <div>{posts[0].fields.title}</div>
    <div>My thoughts coming soon...</div>
  );
};

export default Thoughts;
