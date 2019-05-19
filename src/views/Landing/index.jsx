// @flow
import React, { Component } from 'react';
import Panel from '../../components/Panel';
import Header from '../../components/Header';
import { breakPoints, colors, fontSize, fontWeight } from '../../utils';
// import logo from '../../static/dark_logo_transparent.png';

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
              Currently creating the future of maths education at Mathspace as a
              frontend engineer. Open to opportunities to grow and connect with
              others.
            </div>
            <div className="button">
              <a
                href="mailto:richardjzhang@outlook.com?subject=Website%20Inquiry"
                className="linkStyle"
              >
                Get in touch!
              </a>
            </div>
          </div>
        </div>
        <div className="column">
          <Panel height="100vh" backgroundColor={colors.saffron}>
            <Header backgroundColor={colors.saffron} />
          </Panel>
          <Panel height="100vh" backgroundColor={colors.lochmara}>
            <Header backgroundColor={colors.lochmara} />
          </Panel>
          <Panel height="100vh" backgroundColor={colors.iceberg}>
            <Header backgroundColor={colors.iceberg} />
          </Panel>
          <Panel height="100vh" backgroundColor={colors.mako}>
            <Header backgroundColor={colors.mako} />
          </Panel>
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
            .linkStyle {
              text-decoration: none;
              width: 100%;
              color: ${colors.white};
            }
            .column {
              position: static;
              overflow: visible;
              width: 100%;
            }
            .logo {
              width: 50%;
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
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Landing;
