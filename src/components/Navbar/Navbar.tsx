import React from 'react';
import LazyLoad from 'react-lazyload';

import './Navbar.scss';

const Navbar = () => {
  const renderCompanyBrand = () => (
    <div className="flex flex-col">
      <div className="flex justify-center items-center flex-row">
        <LazyLoad height={40}>
          <img className="Navbar__logo pr-2" src="/images/rotate-logo.png" />
        </LazyLoad>
        <h1 className="text-white text-4xl">AlgoExpert</h1>
      </div>
      <h2 className="mt-2 text-md text-pink02">Ace the Technical Interviews</h2>
    </div>
  );

  return (
    <div className="Navbar flex flex-row pt-4 pl-44 pr-44">
      {renderCompanyBrand()}
      <div>2</div>
      <div>3</div>
    </div>
  );
};

export default Navbar;
