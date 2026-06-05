import React, { useEffect, useState } from "react";
import Movie from "../En/Movie";
import axios from "axios";



const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("fast");
  const [loading, setLoading] = useState(true);
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://www.omdbapi.com/?apikey=ba5cd1ce&s=${searchTerm}&type=movie`,
        );
        const fetchedMovies = data.Search || [];
        setMovies(fetchedMovies);
        setAllMovies(fetchedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [searchTerm]);

  function filterMovies(filter) {
    if (filter === "Newest_TO_Oldest") {
      setMovies(allMovies.slice().sort((a, b) => parseInt(b.Year) - parseInt(a.Year)));
    }
    if (filter === "Oldest_TO_Newest") {
      setMovies(allMovies.slice().sort((a, b) => parseInt(a.Year) - parseInt(b.Year)));
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    const term = e.target.search.value;
    if (term.trim()) {
      setSearchTerm(term.trim());
    }
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Movies
                </h2>
                <form onSubmit={handleSearch} className="form" >
                  <input 
                    type="text" 
                    name="search" 
                    placeholder="Search movies..." 
                    defaultValue={searchTerm}
                    className="input"
                  />
                  <button type="submit" className="search">
                    Search
                  </button>
                </form>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterMovies(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="Newest_TO_Oldest"> Newest To Oldest</option>
                  <option value="Oldest_TO_Newest"> Oldest To Newest</option>
                </select>
              </div>
              {loading ? (
                <div className="movies__loading">Loading...</div>
              ) : (
                <div className="books">
                  {movies.map((movie) => (
                    <Movie key={movie.imdbID} movie={movie} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Movies;


