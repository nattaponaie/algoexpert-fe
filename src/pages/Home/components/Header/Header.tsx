import React from 'react';

import Navbar from 'components/Navbar';

import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="Header pl-80 pr-80">
      <Navbar />
    </div>
  );
};

export default Header;
