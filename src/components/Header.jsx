import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand diff-font" href="/">
        Cinema Journal.
      </a>
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
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/movies">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/shows">
              Series
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
