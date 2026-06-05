import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Movies from './Pages/Movies';

import Movieinfo from './Pages/Movieinfo';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
          <Routes>
          <Route path="/"  element= {<Home movies={movies} />} />
          <Route path="/movies"  element={<Movies ovies={movies} />} />
          <Route path="/movies/:imdbID" element={<Movieinfo movies={movies} /> } />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
