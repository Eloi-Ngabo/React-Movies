import React from 'react'
import Movie from '../En/Movie';
const Recently = ({movies}) => {
  return (
     <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Recently <span className="purple">Viewed</span>
          </h2>
          <div className="movies">
            {movies
            .filter((movie) => movie.salePrice > 0)
            .slice(0, 8)
            .map((movie)=> (
                <Movie movie={movie} key={movie.id} />
            ))}
            
            </div>
          </div>
        </div>
    </section>
  )
}

export default Recently