// @flow
import React, { type Node } from 'react';

import { colors } from '../../utils/themes.jsx';

type Props = {|
  nodes: Array<{
    title: string,
    description: string,
    image: string,
    proportion: string,
    position: 'top' | 'bottom'
  }>
|};

const TimeLine = ({ nodes }: Props) => (
  <React.Fragment>
    {nodes
      .filter(node => node.position === 'top')
      .map(node => (
        <div
          style={{
            borderLeft: `2px solid ${colors.athensGrey}`,
            height: 10,
            marginLeft: node.proportion
          }}
        />
      ))}
    <div className="line">
      {nodes
        .filter(node => node.position === 'bottom')
        .map(node => (
          <div
            style={{
              borderLeft: `2px solid ${colors.athensGrey}`,
              height: 10,
              marginLeft: node.proportion
            }}
          />
        ))}
    </div>
    <style jsx>
      {`
        .line {
          height: 1px;
          border-top: 2px solid ${colors.athensGrey};
        }
      `}
    </style>
  </React.Fragment>
);

export default TimeLine;
