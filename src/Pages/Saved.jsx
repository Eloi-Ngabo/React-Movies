// import React from "react";
// import { Link } from "react-router-dom";
// import undraw_saved from "../assets/undraw_saved.svg";

// const Saved = ({ saved, changeQuantity, removeItem }) => {
//   const total = () => {
//     let price = 0;
//     saved.forEach((item) => {
//       price += +(item.salePrice || item.originalPrice) * item.quantity;
//     });

//     return price;
//   };

//   return (
//     <div id="books__body">
//       <main id="books__main">
//         <div className="books__container">
//           <div className="row">
//             <div className="book__selected--top">
//               <h2 className="cart__title">Saved </h2>
//             </div>
//             <div className="cart">
//               <div className="cart__header">
//                 <span className="cart__book">Book</span>
//                 <span className="cart__quantity">Quantity</span>
//                 <span className="cart__total">Price</span>
//               </div>
//               <div className="cart__body">
//                 {saved.map((movie) => {
//                   return (
//                     <div className="cart__item" key={movie.imdbID}>
//                       <div className="cart__book">
//                         <img
//                           src={movie.poster}
//                           className="cart__book--img"
//                           alt=""
//                         />
//                         <div className="cart__book--info">
//                           <span className="cart__book--title">
//                             {movie.title}
//                           </span>
//                           <span className="cart__book--price">
//                             $
//                             {(movie.salePrice || movie.originalPrice).toFixed(
//                               2,
//                             )}
//                           </span>
//                           <button
//                             className="cart__book--remove"
//                             onClick={() => removeItem(movie)}
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       </div>
//                       <div className="cart__quantity">
//                         <input
//                           type="number"
//                           min={0}
//                           max={99}
//                           className="cart__input"
//                           value={movie.quantity}
//                           onChange={(event) =>
//                             changeQuantity(movie, event.target.value)
//                           }
//                         />
//                       </div>
//                       <div className="cart__total">
//                         $
//                         {(
//                           (movie.salePrice || movie.originalPrice) *
//                           movie.quantity
//                         ).toFixed(2)}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//               {saved.length === 0 && (
//                 <div className="cart__empty">
//                   <img src={undraw_saved} alt="" className="cart__empty--img" />
//                   <h2> You don't have any movies in your cart </h2>
//                   <Link to="/movies">
//                     <button className="btn">Browse movies</button>
//                   </Link>
//                 </div>
//               )}
//             </div>
//             {saved.length > 0 && (
//               <div className="total">
//                 <div className="total__item total__sub-total">
//                   <span>Subtotal</span>
//                   <span>${(total() * 0.9).toFixed(2)}</span>
//                 </div>
//                 <div className="total__item total__tax">
//                   <span>Tax</span>
//                   <span>${(total() * 0.1).toFixed(2)}</span>
//                 </div>
//                 <div className="total__item total__price">
//                   <span>Total</span>
//                   <span>${total().toFixed(2)}</span>
//                 </div>
//                 <button
//                   className="btn btn__checkout no-cursor"
//                   onClick={() => alert(`Haven't got around to doing this:(`)}
//                 >
//                   Proceed to checkout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Saved;
