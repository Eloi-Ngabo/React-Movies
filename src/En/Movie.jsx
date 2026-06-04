import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Rating from './Rating';
import Price from './Price';
import Movies from '../Pages/Movies';

// const Movie = ({ movie }) => {
// //    const [img, setImg] = useState ();

// //     const mountedRef = useRef(true);

// //     useEffect(() => {
// //         mountedRef.current = true;
// //         const image = new Image()
// //         image.src = movie.Poster;
// //         image.onload = () => {
// //             setTimeout(() => {
// //                 if (mountedRef.current) {
// //                     setImg(image);
// //                 }
// //             }, 300);    
// //         };

// //         return () => {
// //             // when the component unmounts
// //             mountedRef.current = false;
// //         }
// //     });

// c



//   return (
//     <div className="book">
//     {
//         img ? (
//         <>
//          <Link to={`/movies/${movie.imdbID}`} >
//         <figure className="book__img--wrapper">
//         <img src={movie.Poster} alt = ""
//         className="book__img" />
//         </figure>
//     </Link> 
//         <div className="book__title">
//         <Link to={`/movies/${movie.imdbID}`}  className="book__title--link">
//         {movie.title}
//         </Link>
//     </div> 

//     <Rating rating={movie.rating} />

//     <Price salePrice={movie.salePrice}
//     originalPrice={movie.originalPrice} />

//         </>
//        ) :(
//        <>
       
//     <div className="book__img--skeleton"></div>
//     <div className="skeleton book__title--skeleton"></div>
//     <div className="skeleton book__rating--skeleton"></div>
//     <div className="skeleton book__price--skeleton"></div> 
//        </>
//     )}      
// </div>  
  
//   )
// }

// export default Movie;                         

const Movie = () => {

    const {movie} = useParams();
    const [movies, setMovies] = useState([]);
  


    useEffect(() => {
        async function getchMovie() {
    //    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=ba5cd1ce&s=fast&type=movie`);
           const { data } = await axios.get(`https://www.omdbapi.com/?apikey=ba5cd1ce&s=${movie}&type=movie`);
         setMovies(data.Search);
        }
        getchMovie();

    }, [])
    
  return (
<>
    {movies.map((movie) => (
        <div className="book" key={movie.imdbID}>
        <Link to={`/movies/${movie.imdbID}`} >
        <figure className="book__img--wrapper">
        <img src={movie.Poster} alt = ""
        className="book__img" />
        </figure>
    </Link> 
        <div className="book__title">
        <Link to={`/movies/${movie.imdbID}`}  className="book__title--link">
        {movie.Title}
        </Link>
    </div>

    <Rating rating={movie.rating} />

    <Price salePrice={movie.salePrice}
    originalPrice={movie.originalPrice} />
</div>

    ))}
</>
  ) 
}

export default Movie;
