import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header(props) {   //props js object return krta hai aur
  return (                                //parent component se child mein data bhejta hai object form mein
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {props.searchBar ? (        //ternary operator props.searchBar pe condition lga ra hu
            <form className="d-flex">   
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          ) : (
            "No Search Bar"
          )}
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {         //defaultProps is used to define default value of props if user   
  title: "Your Title Here",     //has not given any value in parent component
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,     //Here you can define datatypes of your different props it helps 
  searchBar: PropTypes.bool.isRequired  //in debugging and make the code production friendly
}                                          // props means properties
//isRequired mtlb ye to pass krna hi krna hai

                                
