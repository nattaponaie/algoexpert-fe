import React from 'react';

import LazyLoad from 'react-lazyload';

import './Navbar.scss';

const Navbar = () => {
  const renderCompanyBrand = () => (
    <div className="flex flex-col">
      <div className="flex justify-center items-center flex-row">
        <LazyLoad height={40}>
          <img
            className="Navbar__logo pr-2"
            alt="logo"
            src="/images/rotate-logo.png"
          />
        </LazyLoad>
        <h1 className="text-white text-4xl">AlgoExpert</h1>
      </div>
      <h2 className="mt-2 text-md text-pink02">Ace the Technical Interviews</h2>
    </div>
  );

  const renderMenuList = () => (
    <div className="flex text-white">
      <div className="px-2">Products</div>
      <div className="px-2">Content</div>
      <div className="px-2">Team</div>
      <div className="px-2">Purchase</div>
    </div>
  );

  const renderUser = () => <div className="text-white">John Doe</div>;

  return (
    <div className="Navbar flex flex-row justify-between items-center pt-4">
      {renderCompanyBrand()}
      {renderMenuList()}
      {renderUser()}
    </div>
  );
};

export default Navbar;
