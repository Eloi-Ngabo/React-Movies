import React from 'react';
import Landing from '../Components/Landing';
import Explore from '../Components/Explore';

const Home = ({ movies }) => {
  return (
  <>
    <Landing />
    <Explore />
  </>
  );
};

export default Home;