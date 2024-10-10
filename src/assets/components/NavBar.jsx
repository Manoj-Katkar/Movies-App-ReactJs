import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex space-x-8 item-center bg-yellow-300">
      <Link
      className="text-blue-800 text-3xl font-bold"
      to={"/"}>
        Movies
      </Link>
      <Link 
      className="text-blue-800 text-3xl font-bold"
      to={"./watchlist"}>WatchList</Link>
      
    </div>
  );
};

export default NavBar;
