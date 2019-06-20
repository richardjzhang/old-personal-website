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
import picture from '../../static/personal_picture.png';

const PANEL_HEIGHT = '100vh';
const SIDE_PANEL_WIDTH = '40%';
const MAIN_PANEL_WIDTH = '60%';

const Landing = () => (
  <React.Fragment>
    <div className="leftPanel">
      <div className="titleWrapper">
        <img src={picture} alt="" className="image" />
        <div className="title">Hey, I'm</div>
        <div className="title">Richard</div>
        <div className="description">
          My purpose in life is to inspire ideas and solutions in people so that
          we can ultimately fulfill our potential. What gets you up in the
          morning?
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
        <div className="panelWrapper" />
      </Panel>
    </div>
    <style jsx>
      {`
        .leftPanel {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: ${fontSize.xlarge}px;
          box-sizing: border-box;
          background-color: ${colors.athensGray};
        }
        .titleWrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          max-width: 80%;
        }
        .image {
          width: 60%;
          border-radius: 50%;
          margin: 24px auto;
          max-width: 250px;
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
          margin-top: 32px;
          font-size: ${fontSize.medium}px;
          font-weight: ${fontWeight.light};
          text-align: center;
          cursor: pointer;
          transition: background-color 0.5s ease;
        }
        .button:hover {
          background-color: ${hoverColors.cornflowerBlue};
          transition: background-color 0.5s ease;
        }
        .buttonLink {
          text-decoration: none;
          width: 100%;
          color: ${colors.white};
        }
        .panelWrapper {
          color: ${colors.tropicalBlue};
          display: flex;
          justify-content: center;
          flex-direction: column;
          height: 100%;
          position: relative;
          padding-bottom: 24px;
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
