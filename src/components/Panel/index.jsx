// @flow
import React, { type Node } from 'react';

type Props = {|
  height: string,
  backgroundColor: string,
  children: Node,
|};

class Panel extends React.Component<Props> {
  render() {
    const { height, backgroundColor, children } = this.props;
    return (
      <React.Fragment>
        <div
          className="container"
          style={{
            height,
            backgroundColor,
          }}
        >
          {children}
        </div>
        <style jsx>
          {`
            .container {
              padding: 24px 56px;
              flex: 1;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Panel;
