// @flow
import React, { type Node } from 'react';

type Props = {|
  height: string,
  backgroundColor: string,
  children?: Node
|};

const Panel = ({ height, backgroundColor, children }: Props) => (
  <React.Fragment>
    <div
      className="container"
      style={{
        height,
        backgroundColor
      }}
    >
      {children}
    </div>
    <style jsx>
      {`
        .container {
          padding: 24px 56px;
          flex: 1;
          box-sizing: border-box;
        }
      `}
    </style>
  </React.Fragment>
);

export default Panel;
