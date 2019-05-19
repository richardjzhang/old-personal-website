// @flow
import React from 'react';
import white_logo from '../../static/white_logo_transparent.png';

type Props = {|
  backgroundColor: string,
|};

class Header extends React.Component<Props> {
  render() {
    const { backgroundColor } = this.props;
    return (
      <React.Fragment>
        <div className="header" style={{ backgroundColor }}>
          <img src={white_logo} className="logo" alt="logo" />
        </div>
        <style jsx>
          {`
            .header {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 40px;
            }
            .logo {
              max-width: 110px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Header;
