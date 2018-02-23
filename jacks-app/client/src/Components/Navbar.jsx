import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
   render() {
       return (
           <div className="nav_bar">
               <div className="nav_links">
                   <Link className="nav_none" to="/orders">
                       Previous Orders
                   </Link>
               </div>
               <div className="nav_links">
                   <Link className="nav_none" to="/kitchen">
                       Kitchen Orders
                   </Link>
               </div>
               <div className="nav_links">
                   <Link className="nav_none" to="/Menu_Maintenance">
                       Menu Maintenance
                   </Link>
               </div>
               <div className="nav_links right_link">
                   <Link className="nav_none" to="/users/profile">
                       Profile
                   </Link>
               </div>
           </div>
       );
   }
}
export default Navbar;