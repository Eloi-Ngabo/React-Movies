import React from "react";
import { Link, useNavigate } from "react-router-dom";
import undrawVirtual from "../assets/undraw_virtual.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = () => {

const navigate = useNavigate()

  function searchMovies() {
    const searchInput = document.querySelector(".search-input");
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
      navigate(`/movies?search=${encodeURIComponent(searchTerm)}`);
    }
  }

  return (
    <section className="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's most awarded movie subscription platform</h1>
            <h2>
              Find your dream movie with <span className="purple">BLINKER</span>
            </h2>
            <Link to="/movies" className="btn btn--primary">
              Browse movies
            </Link>
            <div className="input search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search by Movie, Make or Keyword"
              ></input>
              <button
                className="movies__search btn__search"
                onClick={() => searchMovies()}
              >
                <FontAwesomeIcon
                  icon="magnifying-glass"
                  className="search-icon"
                />
                <FontAwesomeIcon
                  icon="spinner"
                  className="fas fa-spinner movies__loading--spinner"
                />
              </button>
            </div>
          </div>
          <figure className="header__img--wrapper">
            <img src={undrawVirtual} alt="Virtual Reality" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
