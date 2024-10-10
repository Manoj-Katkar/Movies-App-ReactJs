// import React from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <div className="flex space-x-8 item-center bg-yellow-300">
//       <Link
//       className="text-blue-800 text-3xl font-bold"
//       to={"/"}>
//         Movies
//       </Link>
//       <Link 
//       className="text-blue-800 text-3xl font-bold"
//       to={"./watchlist"}>WatchList</Link>
      
//     </div>
//   );
// };

// export default NavBar;



// !creating the new Navbar 





import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-yellow-400 shadow-md mt-0 sticky top-0 w-full z-50">
      <div className="text-blue-900 text-3xl font-bold">
        <Link to="/">MovieApp</Link>
      </div>
      <div className="space-x-6">
        <Link className="text-blue-800 text-xl hover:text-blue-600 transition duration-300" to="/">
          Movies
        </Link>
        <Link className="text-blue-800 text-xl hover:text-blue-600 transition duration-300" to="./watchlist">
          WatchList
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
