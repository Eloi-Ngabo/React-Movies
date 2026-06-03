import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import {movies} from './data';
import Saved from './Pages/Saved';
import { useEffect, useState } from 'react';
import Movieinfo from './Pages/Movieinfo';

function App() {

  const [saved, setSaved] = useState([])

  function addToSaved(movie) {
      setSaved ([...saved, {...movie, quantity: 1}])
  }


 function changeQuantity(movie, quantity) {
  setSaved(saved.map((item) => item.id === movie.id 
     ? {
      ...item,
      quantity: +quantity,
     } 
   
    : item

  ));

 }

function removeItem(item) {
  setSaved(saved.filter(movie => movie.imdbID !== item.imdbID)) 
}

function numberOfItems() {
  let counter = 0;
  saved.forEach(item => {
    counter += item.quantity
  })
  return counter;
}

  useEffect(() => {
    // console.log(saved)
  }, [saved]);


  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
          <Routes>
          <Route path="/"  element= {<Home movies={movies} />} />
          <Route path="/movies"  element={<Movies movies={movies} />} />
          <Route path="movies/:imdbID" element={<Movieinfo movies={movies} addToSaved={addToSaved} saved={saved}/> } />
          <Route path="/saved" element={<Saved movies={movies} saved={saved} 
          changeQuantity={changeQuantity} removeItem={removeItem}/>} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
