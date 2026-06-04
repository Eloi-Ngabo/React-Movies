import React from 'react';
import Landing from '../Components/Landing';
import Highlights from '../Components/Highlights';
import Featured from '../Components/Featured';
import Recently from '../Components/Recently';
import Explore from '../Components/Explore';

const Home = ({ movies }) => {
  return (
  <>
    <Landing />
    <Highlights />
    {/* <Featured movies={movies} />
    <Recently movies={movies} /> */}
    <Explore />
  </>
  );
};

export default Home;