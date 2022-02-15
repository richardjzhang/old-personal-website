import React from 'react';
import Cover from './Cover';
import Projects from './Projects';
import Work from './Work';

export default function Landing() {
  return (
    <React.Fragment>
      <Cover />
      <Work />
      <Projects />
    </React.Fragment>
  );
}
