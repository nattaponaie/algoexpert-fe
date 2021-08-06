import React from 'react';

import { RouteComponentProps } from 'react-router-dom';

import Header from './components/Header';

type HomeProps = RouteComponentProps;

const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <Header />
      Home
    </div>
  );
};

export default Home;
