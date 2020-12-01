import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./my-navbar.styles.css";
import {Link, withRouter} from 'react-router-dom'

 const open = (history, path)=> {
     if(history.location.pathname === path) {
         return { color: '#ffffff'}
     }
 }

const Menu = ( {history} ) => {
  return (
    <div>
      <Navbar fixed="" variant="" expand="md "
        className="animate-navbar nav-theme justify-content-between" >
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <nav className="navbar ">
            <div className="nav-item">
                  <Link className = "nav-link" style={open(history, '/')} to="/">Home</Link>
              </div>
              <div className="nav-item">
                  <Link className = "nav-link" style={open(history, '/signup')} to="/signup">Signup</Link>
              </div>
              <div className="nav-item">
                  <Link className = "nav-link" style={open(history, '/signin')} to="/signin">Signin</Link>
              </div>
            </nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default withRouter(Menu);
