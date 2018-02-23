import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {

	render(){
return(
<div className='nav_bar'>

  <div className="nav_links"><Link to='/Sign_in'>Login</Link></div>
  <div className="nav_links"><Link to='/Sign_up'>Sign up</Link></div>
  <div className="nav_links"><Link to='/orders'>Previous Orders</Link></div>
	 <div className="nav_links"><Link to='/kitchen'>Kitchen Orders</Link></div>
  <div className="nav_links"><Link to="/Menu_Maintenance">Menu_Maintenance</Link></div>
  <div className="nav_links"><Link to="/users/profile">Profile</Link></div>

</div>
)}}
export default Navbar;