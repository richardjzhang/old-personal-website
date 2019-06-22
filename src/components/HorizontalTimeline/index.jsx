// @flow
import React from 'react';

import { colors } from '../../utils/themes.jsx';

type Props = {|
  nodes: Array<{
    title: string,
    description: string,
    image: string,
    proportion: number,
    position: 'top' | 'bottom'
  }>
|};

const TimeLine = ({ nodes }: Props) => (
  <React.Fragment>
    <div className="wrapper">
      {nodes
        .filter(node => node.position === 'top')
        .map((node, index) => (
          <div
            key={node.title}
            className="tick"
            style={{
              marginLeft:
                index !== 0 && index !== 1
                  ? `${100 * (node.proportion - nodes[index - 2].proportion)}%`
                  : `${100 * node.proportion}%`
            }}
          />
        ))}
    </div>
    <div className="line">
      <div className="wrapper">
        {nodes
          .filter(node => node.position === 'bottom')
          .map((node, index) => (
            <div
              key={node.title}
              className="tick"
              style={{
                marginLeft:
                  index !== 0 && index !== 1
                    ? `${100 *
                        (node.proportion - nodes[index - 2].proportion)}%`
                    : `${100 * node.proportion}%`
              }}
            />
          ))}
      </div>
    </div>
    <style jsx>
      {`
        .line {
          height: 1px;
          border-top: 2px solid ${colors.athensGrey};
        }
        .wrapper {
          display: flex;
        }
        .tick {
          border-left: 2px solid ${colors.athensGrey};
          height: 10px;
        }
      `}
    </style>
  </React.Fragment>
);

export default TimeLine;
