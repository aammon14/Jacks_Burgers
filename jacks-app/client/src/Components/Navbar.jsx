import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
	render(){
return(
<div className='nav_bar'>
  <ul>
  <li> Login</li>
  <li> Sign up</li>
  <Link to='/orders'>Previous Orders</Link>
  <Link to='/kitchen'>Kitchen Orders</Link>
  </ul>
 </div>

)}}
export default Navbar;