// import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import "./navbar.scss";

const Navbar = () => {
    // const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <div className="dropdown">
              <p>
                Categories
                {/* <iconify-icon icon="carbon:collapse-categories"></iconify-icon> */}
              </p> 
            <div className="dropdown--content">
              <Link className="link" to="/?cat=art">
                <h6>Art</h6>
              </Link>
              <Link className="link" to="/?cat=science">
                <h6>Science</h6>
              </Link>
              <Link className="link" to="/?cat=technology">
                <h6>TECHNOLOGY</h6>
              </Link>
              <Link className="link" to="/?cat=cinema">
                <h6>CINEMA</h6>
              </Link>
              <Link className="link" to="/?cat=design">
                <h6>DESIGN</h6>
              </Link>
              <Link className="link" to="/?cat=food">
                <h6>FOOD</h6>
              </Link>
            </div>
          </div>
          {/* <span>{currentUser?.username}</span>
          {currentUser ? ( */}
            <span >Logout</span>
          {/* ) : ( */}
            <Link className="link" to="/login">
              Login
            </Link>
          {/* )} */}
          <span className="write--link">
            <Link className="nav__write" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
