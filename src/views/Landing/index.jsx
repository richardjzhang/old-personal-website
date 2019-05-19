// @flow
import React, { Component } from 'react';
import Panel from '../../components/Panel';
import { breakPoints, colors, fontSize, fontWeight, zIndex } from '../../utils';

class Landing extends Component<{}> {
  render() {
    return (
      <React.Fragment>
        <div className="sidePanel">
          <div className="titleWrapper">
            <div className="title">Creator.</div>
            <div className="title">Engineer.</div>
            <div className="title">Educator.</div>
            <div className="description">
              Currently creating the future of maths education{' '}
              <a href="https://twitter.com/mathspace" className="link">
                @Mathspace
              </a>{' '}
              as a frontend engineer. Now in the process of sharing what I've
              learned with those who want to grow into this space.
            </div>
            <div className="button">
              <a
                href="mailto:richardjzhang@outlook.com?subject=Website%20Inquiry"
                className="buttonLink"
              >
                Get in touch!
              </a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="fixedHeader">test</div>
          <Panel height="95vh" backgroundColor={colors.pickledBluewood} />
          <Panel height="95vh" backgroundColor={colors.saffron} />
          <Panel height="95vh" backgroundColor={colors.lochmara} />
          <Panel height="95vh" backgroundColor={colors.waterLeaf} />
        </div>
        <style jsx>
          {`
            .sidePanel {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              position: static;
              overflow: visible;
              height: 100vh;
              width: 100%;
              padding: ${fontSize.xlarge}px;
              box-sizing: border-box;
              background-color: ${colors.athensGray};
            }
            .titleWrapper {
              text-align: left;
              max-width: 80%;
            }
            .title {
              text-transform: uppercase;
              font-size: ${fontSize.xxlarge}px;
              font-weight: ${fontWeight.semibold};
              color: ${colors.mako};
            }
            .description {
              font-size: ${fontSize.normal}px;
              margin-top: 24px;
              font-weight: ${fontWeight.light};
              color: ${colors.cloudBurst};
            }
            .link {
              font-size: 15px;
              color: ${colors.dodgerBlue};
              text-decoration: none;
            }
            .button {
              border-radius: 300px;
              padding: 16px 16px;
              background-color: ${colors.cornflowerBlue};
              width: 175px;
              margin-top: 48px;
              font-size: ${fontSize.medium}px;
              font-weight: ${fontWeight.light};
              text-align: center;
              cursor: pointer;
            }
            .buttonLink {
              text-decoration: none;
              width: 100%;
              color: ${colors.white};
            }
            .column {
              position: static;
              overflow: visible;
              width: 100%;
            }
            .fixedHeader {
              display: none;
            }
            @media (min-width: ${breakPoints.medium}px) {
              .sidePanel {
                position: fixed;
                left: 0;
                top: 0;
                width: 40%;
                height: 100vh;
              }
              .column {
                position: static;
                overflow: visible;
                width: 60%;
                margin-left: 40%;
              }
              .fixedHeader {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 60px;
                position: fixed;
                left: 0;
                right: 0;
                top: 0;
                z-index: ${zIndex.header};
                margin-left: 40%;
              }
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Landing;
