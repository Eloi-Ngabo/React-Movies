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
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:imdbID" element={<Movieinfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;