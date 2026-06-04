import React, { useEffect, useState } from "react";
import Movie from "../En/Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import axios from "axios";

const Movies = ({ movies: initialMovies }) => {
const [movies, setMovies] =useState(initialMovies || []);
// console.log(movies)


  function filterMovies(filter) {
        console.log(filter)
        if (filter === "Newest_TO_Oldest") {
            setMovies (movies.slice().sort((a, b) => a.Year - b.Year))    
        }
       if (filter === "Oldest_TO_Newest") {
            setMovies (movies.slice().sort((a, b) => b.Year - a.Year)) 
    }
}

    const {data} = useParams();
    useEffect(() => {
      async function getchMovie() {
           const { data } = await axios.get(`https://www.omdbapi.com/?apikey=ba5cd1ce&s=fast&type=movie`);
         setMovies(data.Search || []);
        }
        getchMovie();
        
    }, []);


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
                <select id="filter"defaultValue="DEFAULT"
                  onChange={(event) => filterMovies(event.target.value)}>
                  <option value="DEFAULT" disabled>Sort</option>
                  <option value="Newest_TO_Oldest"> Oldest To Newest</option>
                  <option value="Oldest_TO_Newest"> Newest To Oldest</option>
                </select>
              </div>
              <div className="books">
                {movies.map((movie) => (
                  <Movie movie={movie} key={movie.imdbID} />
                ))}
               
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Movies;



