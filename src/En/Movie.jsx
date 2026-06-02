import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from './Rating';
import Price from './Price';

const Movie = ({ movie }) => {
  return (
    <div className="book">
    {
        movie.img ? (
        <>
         <Link to={`/movies/${movie.id}`} >
        <figure className="book__img--wrapper">
        <img src={movie.img.src} alt = "" 
        className="book__img" />
        </figure>
    </Link> 
        <div className="book__title">
        <Link to={`/movies/${movie.id}`}  className="book__title--link">
        {movie.title}
        </Link>
    </div> 

    <Rating rating={movie.rating} />

    <Price salePrice={movie.salePrice}
    originalPrice={movie.originalPrice} />

        </>
       ) :(
       <>
       
    <div className="book__img--skeleton"></div>
    <div className="skeleton book__title--skeleton"></div>
    <div className="skeleton book__rating--skeleton"></div>
    <div className="skeleton book__price--skeleton"></div> 
       </>
    )}      
</div>  
  
  )
}

export default Movie