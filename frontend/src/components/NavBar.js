import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";


function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  
  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();

  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            CLUB CULTURE
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/clubs"}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CLUBS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Cities"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CITIES
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Profile" className="nav-links" onClick={closeMobileMenu}>
                PROFILE
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li> */}
          </ul>
          {()=>
          {if (isLoading) {
            return <p>Loading ...</p>;
          }

          return (
            isAuthenticated && (
              <li>
                <p>{user.email}</p>
              </li>
            )
          );

          }}





          {button && <Button buttonStyle="btn--outline" onClick={()=> loginWithRedirect()} >Sign In</Button>}
          <br/>
          {button && <Button buttonStyle="btn--outline" onClick={()=> logout({ returnTo: window.location.origin })} >Log out</Button>}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
