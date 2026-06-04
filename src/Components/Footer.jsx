import React from 'react';
import { Link } from 'react-router-dom';
import blinkIcon from '../assets/blinker-icon.png';
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to ="/">
            <figure className="footer__logo">
              <img src={blinkIcon} className="footer__logo--img" alt="" />
            </figure>
          </Link>
        <div className="footer__list">
            <Link to ="/" className="footer__link">
            Home
        </Link>
            <span className ="footer__link no-cursor">About</span>
             <Link to ="/movies" className="footer__link">
              Movies
             </Link>
             <Link to ="/movies" className="footer__link">
             Contact
             </Link>
             </div>
             <div className="footer__copyright">
                Copyright &copy; 2026 movie
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;