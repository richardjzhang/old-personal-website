// @flow
import React, { Component } from 'react';
import Panel from '../../components/Panel';
import {
  breakPoints,
  colors,
  fontSize,
  fontWeight,
  zIndex,
} from '../../utils/themes.jsx';
import { urls } from '../../utils/urls.jsx';

const PANEL_HEIGHT = '95vh';
const SIDE_PANEL_WIDTH = '40%';
const MAIN_PANEL_WIDTH = '60%';

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
              <a href={urls.mathspaceTwitter} className="link">
                @Mathspace
              </a>{' '}
              as a frontend engineer. Now in the process of sharing what I've
              learned with those who want to enter this space.
            </div>
            <div className="button">
              <a href={urls.mailTo} className="buttonLink">
                Get in touch!
              </a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="fixedHeader">test</div>
          <Panel
            height={PANEL_HEIGHT}
            backgroundColor={colors.pickledBluewood}
          />
          <Panel height={PANEL_HEIGHT} backgroundColor={colors.saffron} />
          <Panel height={PANEL_HEIGHT} backgroundColor={colors.lochmara} />
          <Panel height={PANEL_HEIGHT} backgroundColor={colors.waterLeaf} />
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
            }
            .fixedHeader {
              display: none;
            }
            @media (min-width: ${breakPoints.medium}px) {
              .sidePanel {
                position: fixed;
                left: 0;
                top: 0;
                width: ${SIDE_PANEL_WIDTH};
                height: 100vh;
              }
              .column {
                position: static;
                overflow: visible;
                width: ${MAIN_PANEL_WIDTH};
                margin-left: ${SIDE_PANEL_WIDTH};
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
                margin-left: ${SIDE_PANEL_WIDTH};
              }
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Landing;
