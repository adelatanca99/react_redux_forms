import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/streams/delete" className="item">
        Stream delete
      </Link>
      {/* <Link to="/" className="item">
        Photos Page
      </Link>
      <Link to="/comments" className="item">
        Comments Page
      </Link> */}
      <div className="right menu">
        <Link to="/streams/new" className="item">
          Streams new
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
