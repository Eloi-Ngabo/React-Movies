import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';




const Movie = ({ movie }) => {
  return (
    <div className="book">
      <Link to={`/movies/${movie.imdbID}`}>
        <figure className="book__img--wrapper">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="book__img"
          />
        </figure>
        <div className="book__title">{movie.Title}</div>
        <div className="book__year">{movie.Year}</div>
      </Link>
    </div>
  );
};
export default Movie;







    
  



