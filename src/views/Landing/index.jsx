// @flow
import React from 'react';
import Panel from '../../components/Panel';
import {
  breakPoints,
  colors,
  hoverColors,
  fontSize,
  fontWeight,
  zIndex
} from '../../utils/themes.jsx';
import { urls } from '../../utils/urls.jsx';
import logo from '../../static/personal_logo_transparent.png';

const PANEL_HEIGHT = '100vh';
const SIDE_PANEL_WIDTH = '40%';
const MAIN_PANEL_WIDTH = '60%';

const Landing = () => (
  <React.Fragment>
    <div className="leftPanel">
      <div className="titleWrapper">
        <img src={logo} alt="" className="image" />
        <div className="title">Richard Zhang</div>
        <div className="description">
          Crafting code that executes people's dream's into reality
        </div>
        <div className="button">
          <a href={urls.mailTo} className="buttonLink">
            Get in touch!
          </a>
        </div>
      </div>
    </div>
    <div className="rightPanel">
      <Panel height={PANEL_HEIGHT} backgroundColor={colors.vulcan}>
        <div className="panelWrapper">
          <div className="panelContentTitle">My Journey</div>
          <div className="panelContentTitle">My Stories</div>
          <div className="panelContentTitle">My Creations</div>
          <div className="panelContentTitle">My Lessons</div>
        </div>
      </Panel>
    </div>
    <style jsx>
      {`
        .leftPanel {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 32px 32px 80px 32px;
          box-sizing: border-box;
          background-color: ${colors.athensGray};
        }
        .titleWrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          max-width: 85%;
        }
        .image {
          width: 40%;
          margin-bottom: 32px;
          max-width: 200px;
          max-height: 200px;
        }
        .title {
          text-transform: uppercase;
          font-size: ${fontSize.xxxlarge}px;
          font-weight: ${fontWeight.semibold};
          color: ${colors.pickledBluewood};
        }
        .description {
          font-size: ${fontSize.large}px;
          margin-top: 24px;
          font-weight: ${fontWeight.light};
          color: ${colors.pickledBluewood};
        }
        .link {
          font-size: 15px;
          color: ${colors.dodgerBlue};
          text-decoration: none;
        }
        .button {
          padding: 16px 16px;
          background-color: ${colors.pickledBluewood};
          width: 175px;
          margin-top: 48px;
          font-size: ${fontSize.medium}px;
          font-weight: ${fontWeight.light};
          text-align: center;
          border-radius: 300px;
          cursor: pointer;
          transition: background-color 0.5s ease;
        }
        .button:hover {
          background-color: ${colors.cloudBurst};
          transition: background-color 0.5s ease;
        }
        .buttonLink {
          text-decoration: none;
          width: 100%;
          color: ${colors.white};
        }
        .panelWrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          position: relative;
          color: ${colors.tropicalBlue};
        }
        .panelContentTitle {
          margin-bottom: 32px;
          cursor: pointer;
          text-transform: uppercase;
          font-size: ${fontSize.xlarge}px;
          font-weight: ${fontWeight.semibold};
          color: ${colors.white};
        }
        .panelContentTitle:hover {
          color: ${colors.tropicalBlue};
          transition: background-color 0.5s ease;
        }
        .fixedHeader {
          display: none;
        }
        @media (min-width: ${breakPoints.large}px) {
          .leftPanel {
            position: fixed;
            left: 0;
            top: 0;
            width: ${SIDE_PANEL_WIDTH};
            height: 100vh;
          }
          .rightPanel {
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
export default Landing;
