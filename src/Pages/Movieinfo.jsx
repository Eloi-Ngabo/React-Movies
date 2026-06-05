import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import axios from "axios";



const Movieinfo = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  

  useEffect(() => {
    async function getMovieInfo() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=ba5cd1ce&i=${imdbID}`,
      );

      setMovie(data);
    }

    getMovieInfo();
  }, [imdbID]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/movies" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/movies" className="book__link">
                <h2 className="book__selected--title--top">movies</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={movie.Poster} alt={movie.Title} />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{movie.Title}</h2>
                <div className="book__summary">
                  <h3 className="book__summary--title">summary </h3>
                  <p className="book__summary--para">
                   {movie.Plot}
                  </p>
                  <p className="book__summary--para">
                    {movie.Year}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Movieinfo;
