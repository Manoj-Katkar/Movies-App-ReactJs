import React, { useContext, useEffect, useState } from "react";
import movieImage from "/images/movie image.webp";
import MoviesCarts from "./MoviesCarts";
import Pagination from "./Pagination";
import axios from "axios";
import MovieContext from "../../Context/MovieContext";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store/store";
import fetchMoviesMiddleware from "../../middlewares/fetchMoviesMiddleware";

const Movies = () => {
  // !lets take the one more state for the pagination That  I have to implement
  const [pageNo, setPageNo] = useState(1);

  // lets create the two function to go to the next page and previous page
  let handleNext = () => {
    setPageNo(pageNo + 1);
  };

  let handlePrevious = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };
  // In this second class of the IMDB we will use use the static data so I will be using useState() hook here
  // !I will create the one state to store the movies

  // let [movies, setMovies] = useState([
  //   {
  //     url: `${movieImage}`,
  //     title: "Movie 1",
  //   },
  //   {
  //     url: `${movieImage}`,
  //     title: "Movie 1",
  //   },
  //   {
  //     url: `${movieImage}`,
  //     title: "Movie 1",
  //   },
  //   {
  //     url: `${movieImage}`,
  //     title: "Movie 1",
  //   },
  //   {
  //     url: `${movieImage}`,
  //     title: "Movie 1",
  //   },
  // ]);

  //! rather than taking the local state for movies I will take it one global state using redux and that I will use here 

  let {movies , error , loading} = useSelector((store) => {
    return store.movieState;
  })

  // also take the one dispatch middleware 
  let dispatch = useDispatch();




//   // All users fav movies will get added in watchlist state Array 
//   // !we have done this lifting up the state from the watchlist component 
//   const [watchlistArray , setWatchlistArray] = useState([]);


//   // Initialize watchlistArray from local storage when the component mounts
//   // !means when you are rendering Movies again from the watchlist in the UI read the data from the localStorage and make it as the state value 
  
//   useEffect(() => {
//     const savedWatchlist = JSON.parse(localStorage.getItem("watchlistArray")) || [];
//     setWatchlistArray(savedWatchlist);
//   }, []);



//   // now to add the new movie that user likes in the watchlist array I will create the one function for that 
//   const addToWatchlist = (movie) => {
//     const updatedWatchlist = [...watchlistArray , movie];
//     setWatchlistArray(updatedWatchlist)

//     // then add it in the local storage 
//     localStorage.setItem("watchlistArray" , JSON.stringify(updatedWatchlist))

    
//   }

// const removeFromWatchlist = (movie) => {
//   const filteredWatchlistArray = watchlistArray.filter((currentMovie) => {
//     if(currentMovie.id !== movie.id){
//       return true;
//     }
//     else{
//       return false;   //means if it is same remove that it should not be present in the filtered array 
//     }
//   });

//   setWatchlistArray(filteredWatchlistArray);

//   localStorage.setItem("watchlistArray" , JSON.stringify(filteredWatchlistArray))
// }

  // console.log(watchlistArray);


  // ^================================I will context API through that I get the state and props ============================

  let {watchlistArray , setWatchlistArray , addToWatchlist , removeFromWatchlist} = useContext(MovieContext);






  // !implementing the function to check that movie iss already there in localstorage or not 
  const isAddedToWatchList = (movie) => {
    return watchlistArray.some((watchlistMovie) => watchlistMovie.id === movie.id);
  }




  // !Now I want to add the movies dynamically so here again I will make the api call optimization can be done using the lifting up the state 

  useEffect(() => {
    // axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=39b6e395d9e668e23e0c51b81f844ad1&language=en-US&page=${pageNo}`)    //^using the page name as the query param to implement the pagination
    // .then((convertedResponse) => {
    //   console.log("convertedResponse from Movies Componenet");
      
    //   console.log(convertedResponse);

    //   // !now set the actual data to the movies 
    //   setMovies(convertedResponse.data.results)     
    
      
    // })


        //!I will write the above logic in the middlewares 

        dispatch(fetchMoviesMiddleware(pageNo))

        console.log(movies);
        



  } , [pageNo])



  // !now according to the condition my UI should get updated 
  if(loading){
    return(
      <h1>Loading....................</h1>
    )
  }

  if(error){
    return (
      <h1>Something went wrong Error</h1>
    )
  }


  return (
    <div>
      {/* to just display the text as the trending movies  */}
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>

      {/* Now I have to take the one more div that will return the each trending movie with its name and poster  */}

      <div className="flex justify-evenly  flex-wrap gap-8">
        {
          // !I have to iterate over the movies state having the array of objects details of the each movie

          movies.map((currentMovie, currentIndex) => {
            // &it should return the jsx that will be each time new cart having movioe image and its name

            return <MoviesCarts currentMovie={currentMovie} key={currentIndex} addToWatchlist={addToWatchlist}  removeFromWatchlist={removeFromWatchlist}  isAddedToWatchList={isAddedToWatchList}/>;
          })
        }
      </div>

      {/*  taking the div to implement the pagination in the UI*/}
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrevious={handlePrevious}/>

    </div>
  );
};

export default Movies;
