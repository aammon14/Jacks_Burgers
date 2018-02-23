import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
	render() {
    return(
      <div className='nav_bar'>
        <div className="nav_links"><Link to='/orders'>Past Orders</Link></div>
	      <div className="nav_links"><Link to='/kitchen'>Order Queue</Link></div>
        <div className="nav_links"><Link to="/Menu_Maintenance">Admin</Link></div>
        <div className="nav_links"><Link to="/users/profile">Profile</Link></div>
      </div>
    )
  }
}

export default Navbar;