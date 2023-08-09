import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../App.css";
import { useContext } from "react";
import { AuthContext } from "../context/Auth.context";

const NavbarAdmin = () => {
  const { user } = useContext(AuthContext);
    const location = useLocation();
  
    return (
      <nav className="NavBar">
        <ul>
      {location.pathname !== '/admin' && (
            <li><Link to="/admin">Admin</Link></li>
          )}
          { user && location.pathname !== `/favorites${user._id}` && (
                <li>
                  <Link to={`/favorites/${user._id}`}>Favorites</Link>
                </li>
              )}
           {location.pathname !== '/allsports' && (
            <li><Link to="/allsports">All Sports</Link></li>
          )}
       
          {/* Add more conditionals for other links */}
        </ul>
      </nav>
    );
  };

  
export default NavbarAdmin;