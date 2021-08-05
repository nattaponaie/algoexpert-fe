import React from 'react';

import Navbar from '../../../../components/Navbar';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="Header pl-32 pr-32">
      <Navbar />
    </div>
  );
};

export default Header;
