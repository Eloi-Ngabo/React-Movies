import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from './Rating';
import Price from './Price';

const Movie = ({ movie }) => {
   const [img, setImg] = useState ();

    const mountedRef = useRef(true);

    useEffect(() => {
        mountedRef.current = true;
        const image = new Image()
        image.src = movie.Poster;
        image.onload = () => {
            setTimeout(() => {
                if (mountedRef.current) {
                    setImg(image);
                }
            }, 300);    
        };

        return () => {
            // when the component unmounts
            mountedRef.current = false;
        }
    });


  return (
    <div className="book">
    {
        img ? (
        <>
         <Link to={`/movies/${movie.id}`} >
        <figure className="book__img--wrapper">
        <img src={movie.Poster} alt = "" 
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