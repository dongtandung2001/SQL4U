import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav style={{margin: "auto 3rem"}} className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <h1 className="mt-2">
          <Link
            style={{fontWeight: "900"}}
            className="navbar-brand font-monospace text-primary fs-1"
            to="/"
          >
            SQL4U
          </Link>
          <p className="fs-6 text-primary ">Online Education & Learning</p>
        </h1>
        <div className="navbar-nav ms-auto">
          {/* <Link
            className="nav-item nav-link mt-2"
            aria-current="page"
            to="/about"
          >
            About
          </Link>
          <Link
            className="nav-item nav-link mt-2"
            aria-current="page"
            to="/contact"
          >
            Contact
          </Link> */}
          <a href="#footer" className="nav-item nav-link mt-2" aria-current="page">About</a>
          <a href="#footer" className="nav-item nav-link mt-2" aria-current="page">Contact</a>

          {!user && (
            <React.Fragment>
              <Link
                className="nav-item nav-link"
                aria-current="page"
                to="/login"
              >
                <button className="btn btn-primary"> Login</button>
              </Link>

              <Link
                className="nav-item nav-link"
                aria-current="page"
                to="/register"
              >
                <button className="btn btn-primary"> Register</button>
              </Link>
            </React.Fragment>
          )}

          {user && (
            <React.Fragment>
              <Link
                className="nav-item nav-link"
                aria-current="page"
                to="/logout"
              >
                <button className="btn btn-danger"> Logout</button>
              </Link>

              <Link
                className="nav-item nav-link"
                aria-current="page"
                to="/profile"
              >
                <button className="btn btn-primary"> User</button>
              </Link>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
