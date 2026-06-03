import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import Rating from "../En/Rating";
import Price from "../En/Price";
import Movie from "../En/Movie";


const Movieinfo = ({movies, addToSaved, saved, imdbID}) => {

    const {id} = useParams();
    const movie = movies.find((movie) => movie.imdbID === imdbID);
    function addToSaved(movie) {
        addToSaved(movie)
    }

    function movieExistsOnSaved() {
        return saved.find(movie => movie.imdbID === +imdbID)
    }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Movies</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={movie.Poster} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  {movie.Title}
                </h2>
                <Rating rating={movie.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={movie.originalPrice}
                    salePrice={movie.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">summary </h3>
                  <p className="book__summary--para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Reiciendis aperiam vitae quis assumenda! Modi voluptates
                    magnam quis omnis doloremque laudantium minima temporibus.
                    Explicabo, facilis! Inventore molestiae magni a unde
                    incidunt!
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Reiciendis aperiam vitae quis assumenda! Modi voluptates
                    magnam quis omnis doloremque laudantium minima temporibus.
                    Explicabo, facilis! Inventore molestiae magni a unde
                    incidunt!
                  </p>
                </div>
                {movieExistsOnSaved() ? (
                  <Link to={`/saved`} className="book__link">
                    <button className="btn">See Saved</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addToSaved(movies)}>
                    Add to Saved
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Movies</h2>
            </div>
            <div className="books">
              {movies
                .filter((movie) => movie.rating === 5 && +movie.imdbID !== +imdbID)
                .slice(0, 4)
                .map((movie) => (
                  <Movie movie={movie} key={movie.imdbID} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Movieinfo;
