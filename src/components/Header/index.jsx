import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';

const Header = () => {
  const location = useLocation();

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <div className="nav-column">
        <Link to={to} className={isActive ? 'active' : ''}>
          {isActive ? (
            <div className="button-wrap">
              <button>
                <span>{children}</span>
              </button>
              <div className="button-shadow"></div>
            </div>
          ) : (
            <div className="nav-text">{children}</div>
          )}
        </Link>
      </div>
    );
  };

  return (
    <div className="header block">
      <div className="header-content">
        <div className="nav-container">
          <NavLink to="/">Home</NavLink>
          <span className="separator">|</span>
          <NavLink to="/about">About</NavLink>
          <span className="separator">|</span>
          <NavLink to="/publications">Publication</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header; 