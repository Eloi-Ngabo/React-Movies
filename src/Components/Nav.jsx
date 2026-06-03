import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blinkIcon from '../assets/blinker-icon.png';
import  { Link }  from 'react-router-dom';





const Nav = ({ numberOfItems }) => {
  function openMenu() {
    document.body.classList += " menu--open";
  };

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
        <div className="nav__container">
   
        <Link to="/">
        <img src={blinkIcon} alt="logo" className="logo" />
       </Link>
        <ul className="nav__links">
            <li className="nav__list">
                <Link to="/" className="nav__link">
                    Home
               </Link>  
                </li>
            <li className="nav__list">
                <Link to="/movies" className="nav__link">
                Find Your Movies
               </Link>         
                  </li>

               <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon= "bars" />
            </button>

            <li className="nav__icon">
                <Link to="/saved" className="nav__link">
                    <FontAwesomeIcon icon="shopping-cart" />
               </Link> 
               {numberOfItems > 0 &&           
                <span className="saved__length">{numberOfItems}</span>
               }
            </li>
        </ul>
        <div className="menu__backdrop">
            <button className=" btn__menu btn__menu--close" onClick={closeMenu}>
                <FontAwesomeIcon icon="times" />
            </button>
                <ul className="menu__links">
                    <li className="menu__list">
                        <Link to="/" className="menu__link">
                            Home
                       </Link>                    </li>
                    <li className="menu__list">
                        <Link to="/movies" className="menu__link">
                          Movies  
                       </Link>                    </li>
                    <li className="menu__list">
                        <Link to="/saved" className="menu__link">
                            Saved

                       </Link>                    </li>
                </ul>
        </div>
      </div>
    </nav>
 
  );
};

export default Nav;
