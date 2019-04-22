import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faUser)

const Header = props => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        {props.name}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Explore
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Discover
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
     
        <a href="/" className="btn btn-warning ">Create Story</a>
        <ul className="navbar-nav">
        <li className="nav-item dropdown">
            <a
              className="btn btn-secondary dropdown-toggle dropleft"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon="user" />
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </div>
          </li>
        </ul>

      </div>
    </nav>
    </header>
  );
};

export default Header;
