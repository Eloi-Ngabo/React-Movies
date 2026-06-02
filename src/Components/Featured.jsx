import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Movie from '../En/Movie';


const Featured = ({movies}) => {
  return (
   <section id ="features">
      <div className="container">
        <div className="row">
            <h2 className="section__title">
            Featured <span className="purple">Movies</span>
            </h2>
            <div className="movies">

             {movies
             .filter(movie => movie.rating === 5)
             .slice(0, 4)
             .map(movie => <Movie key={movie.id} movie={movie} />)
            }
            
            </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
