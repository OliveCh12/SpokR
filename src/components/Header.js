import React from "react";

import firebase from "../database/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { NavLink, Link } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCog,
  faSignOutAlt,
  faBook
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faCog, faSignOutAlt, faBook);

const Header = props => {
  const { initialising, user } = useAuthState(firebase.auth());

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword("olivierchemla@gmail.com", "nanopod012");
  };
  const logout = () => {
    firebase.auth().signOut();
  };

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
              <NavLink to="/stories" className="nav-link">
                Stories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Explore
              </NavLink>
            </li>
          </ul>
          {user ? (
            <ul className="navbar-nav ml-2">
              <li className="nav-item">
                <a href="/" className="btn btn-warning mr-2">
                  Create Story
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {user.email}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  <Link to="/stories" className="dropdown-item">
                    <FontAwesomeIcon icon="book" className="mr-2" />
                    Stories
                  </Link>
                  <Link className="dropdown-item" to="/profil">
                    <FontAwesomeIcon icon="user" className="mr-2" />
                    Profil
                  </Link>
                  <Link className="dropdown-item" to="/settings">
                    <FontAwesomeIcon icon="cog" className="mr-2" />
                    Settings
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="/" onClick={logout}>
                    <FontAwesomeIcon icon="sign-out-alt" className="mr-2" />
                    Logout
                  </Link>
                </div>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-2">
              <li className="nav-item">
                <NavLink to="/signin" className="nav-link">
                  Sign In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/signup" className="nav-link">
                  Sign Up
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
