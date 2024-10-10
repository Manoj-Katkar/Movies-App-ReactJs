import React, { useContext, useEffect, useState } from 'react'
import MovieContext from '../../Context/MovieContext';


const Watchlist = () => {

  // !I will take the one state to store the watchlist 
  // const [watchlistArray , setWatchlistArray] = useState([]);

  // ^===========================to get the watchlistArray we will use the context API ====================

  let {watchlistArray , setWatchlistArray} = useContext(MovieContext);

  

  // ^I will use the state that I have defined in the MovieContext that is common to alkl my child components so I can directlly maintain that state in MovieContext component I will import all things that component is providing to me using the useContext() hook 
  // !I am not using useContext() in this component because naming convension differs here 


  // !I will take the one state to store the input text that is entered by the user 
  const [searchText , setSearchText] = useState("");

  // !lets create the one state which will store the alll the genre names that my currrent movies have according to that I will give the button options to user to filter those movies 
  const [genreList , setGenreList] = useState(["ALL"]);  //^I will update this at the first rendering it self 

  const [currentGenre , setCurrentGenre] = useState("ALL");  //means it is default that user is already going to see 


  // ^Now for the numeric number what is present for that I have to show the correct genre like sci-fiction , comedy 
  // ~lets take the one object for that 
  const genreIds = {
    28:"Action",
    12:"Adventure",
    16:"Animation",
    35:"Comedy",
    80:"Crime",
    99:"Documentary",
    18:"Drama",
    10751:"Family",
    14:"Fantasy",
    36:"History",
    27:"Horror",
    10402:"Music",
    9648:"Mystery",
    10749:"Romance",
    878:"Sci-Fi",
    10770:"TV",
    53:"Thriller",
    10752:"War",
    37:"Western"

  };

  // !then I will use the useEffect hook with empty array as the dependancy to fetch the all details form the local storage at the first rendering itself 

  // ^====================================Not using below useEffect because state get updated via context API ================

  // useEffect(()=> {
  //   const favMovieData = JSON.parse(localStorage.getItem("watchlistArray"));

  //   if(favMovieData){
  //     //means user liks or dislikes some data is present so show that 
  //     setWatchlistArray(favMovieData);

  //   }


  // } , [])


  // !to get the all the genre names that each movies is having at the starting itself 
  useEffect(() => {
    const genresArray = watchlistArray.map((currentMovie , index) => {
      return genreIds[currentMovie.genre_ids[0]];
    });

    // !now here the problem I am getting is that same genres are getting adding the array twice so to uniquely add the genres I have to use the set data structure in javascript 

    console.log("genresArray");
    console.log(genresArray);

    //^to get the unique genres I will use the set data structure in javascript 
    const uniqueGenres = new Set(genresArray);

    console.log("uniqueGenres" , uniqueGenres);

    console.log(typeof uniqueGenres);
    

    // *convert the set object to the array using the spread opearator 
    let uniqueSetGenresValuesArray = [...uniqueGenres];  //&here converted set object to array using spread operator 

    console.log(uniqueSetGenresValuesArray);
    

    // now I ave to update the setGenreList
    setGenreList(["ALL" , ...uniqueSetGenresValuesArray]);

    console.log("genreList" , genreList); //*its got updated but not getting shown here because 
    
    
    
    
  } , [watchlistArray])

  console.log("genreList" , genreList);


  // !implementing the below logic for the sorting the movies in watchlist component based on the ratings
  // I have to sort the watchlist data based on the ratings that is going to be the custom comparator 



      const handleAscendingRatings = () => {
        console.log("handleAscendingRatings");
        // low to hight rating sort it 
        // sort will take the callback and that callback will take the two parameters 
        // A , B
        // A  = Second value 
        // B = first value 
        // for Ascending A - B and for descending = B - A

        // Create a new array to avoid mutating the state
        let sortedAscending = [...watchlistArray]; //created the copy of the array

        sortedAscending.sort((movie2, movie1) => {
          return movie2.vote_average - movie1.vote_average;
        });

        setWatchlistArray(sortedAscending);
        console.log("Updated Watchlist", sortedAscending);
      };




      const handleDescendingRatings = () => {
        console.log("handleDescendingRatings");

        // hight to low rating sort it 
        // Create a new array to avoid mutating the state
        let sortedDescending = [...watchlistArray];   //created the copy of the array

        sortedDescending.sort((movie2, movie1) => {
          return movie1.vote_average - movie2.vote_average;
        });

        setWatchlistArray(sortedDescending);
        console.log("Updated Watchlist", sortedDescending);
      };


  // !writing the filter function according to the user input text that I have stored in the one state that is searchText

  const filterWatchListMovies = () => {
    const copyOfWatchList = [...watchlistArray];

    let filteredSearchMovies = copyOfWatchList.filter((currenMovie , Index) => {
      if(currenMovie.title.toLowerCase().includes(searchText.toLowerCase())){
        // then only add that movie in the filtered Search Movies 
        return true;
      }
    })

    console.log(filteredSearchMovies);

    // now update the value of the state 
    if(searchText){
      //means search text is having some value then only change the state otherwise do not change it 
      setWatchlistArray(filteredSearchMovies);
    }
    else if(searchText === ""){
      setWatchlistArray(JSON.parse(localStorage.getItem("watchlistArray")));
    }
    
    
  }

  // !NOw I have to chnage the Genre of the each movie with its proper Name and that I have to render it in the UI 

    // !Function to handle deleting a movie from the watchlist
    const handleDelete = (movieId) => {
      const updatedWatchlist = watchlistArray.filter(movie => movie.id !== movieId);
      setWatchlistArray(updatedWatchlist);
      localStorage.setItem("watchlistArray", JSON.stringify(updatedWatchlist));
    };




  // const addToWatchList
  return (
  <>
    {/* Now here I have to show all the genre buttons for filtration */}
      <div className='flex flex-wrap justify-center m-4'>
        {genreList.map((currentUniqueGenre, index) => {
          return (
            <button
            key={index} // Add a unique key for each button
            className={`m-2 p-2 rounded-xl text-white font-semibold transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 
              ${currentGenre === currentUniqueGenre
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-black/60 hover:bg-green-600 hover:scale-105'}`}

             onClick={(event) => {
              setCurrentGenre(event.target.innerHTML);

              // after setting the current genre I have to do the filteration 
             }}   
          >
              {currentUniqueGenre}
            </button>
          );
        })}
      </div>

    <div className='flex justify-center items-center mt-5'>
      <input 
      type="text" 
      placeholder="Search Movies"
      value={searchText}
      onChange={(event) => {

        setSearchText(event.target.value);
        
        if(searchText === ""){
          setWatchlistArray(JSON.parse(localStorage.getItem("watchlistArray")));
        }
      }}
      className="w-full max-w-md px-4 py-2 border-2 border-blue-400 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gradient-to-r from-gray-100 via-white to-gray-100 hover:bg-gradient-to-r hover:from-blue-100 hover:via-white hover:to-blue-100 transition duration-300 ease-in-out text-gray-700"
      />

      

      <button
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out m-2"
        onClick={filterWatchListMovies}
      >
        Search
      </button>


    </div>

    <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md m-5'>
    <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
      <thead>
        <tr className='bg-gray-50'>
          <th className='px-6 py-4 font-medium text-gray-900'>Name</th>
          <th className='px-6 py-4 font-medium text-gray-900'>
                <i className="fa-solid fa-arrow-up m-1 transform transition-transform duration-300 hover:scale-125 hover:text-blue-500 active:scale-150"
                  onClick={handleDescendingRatings}
                  title='Top Rated First'>
                </i>

                Ratings      

                <i className="fa-solid fa-arrow-down m-1 transform transition-transform duration-300 hover:scale-125 hover:text-red-500 active:scale-150"
                  onClick={handleAscendingRatings}
                  title='Lowest Rated First'>
                </i>

            </th> 
          <th className='px-6 py-4 font-medium text-gray-900'>Popularity</th>
          <th className='px-6 py-4 font-medium text-gray-900'>Genre</th>
        </tr>
      </thead>

      <tbody>
            {watchlistArray
              .filter((currentMovie) => {
                //^ this filter I am applying for the according to the currentGenre that user I have selected using the buttons that is shown in the UI 
                if(currentGenre === "ALL"){
                  return true; //means all the movies will get return in the filtered array 
                }
                else{
                  // !I have to get the entire genres in the one string so to check that currentGenre is present or not in the current movie 
                    const genreNames = currentMovie.genre_ids
                    .map(id => genreIds[id])
                    .filter(Boolean) //^Remove undefined values if any ID doesn't match
                    .join(', ');

                    if(genreNames.includes(currentGenre) == true){
                      //*then only return those movie in the filtered array 
                      return true;
                    }
                    else{
                      false;   //do not return that movie 
                    }
                }
              })
              .filter((currentMovie) => 
                currentMovie.title.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((currentFavMovie, index) => {
                //! Map genre IDs to genre names
                const genreNames = currentFavMovie.genre_ids
                  .map(id => genreIds[id])
                  .filter(Boolean) //^Remove undefined values if any ID doesn't match
                  .join(', ');

                return (
                  <tr key={index} className="hover:bg-gray-50 transition-all">
                    <td className='px-6 py-4 flex items-center space-x-4'>
                      <img
                        className="w-12 h-18 rounded-md shadow-md"
                        src={`https://image.tmdb.org/t/p/original${currentFavMovie.poster_path}`}
                        alt={currentFavMovie.title}
                      />
                      <div className="text-gray-900 font-semibold">{currentFavMovie.title}</div>
                    </td>
                    <td className='px-6 py-4 text-gray-700'>{currentFavMovie.vote_average}</td>
                    <td className='px-6 py-4 text-gray-700'>{currentFavMovie.popularity}</td>
                    <td className='px-6 py-4 text-gray-700'>{genreNames}</td>
                    <td className='px-6 py-4'>

                    <button
                      className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none transition duration-300"
                      onClick={() => handleDelete(currentFavMovie.id)}
                    >
                      Delete
                    </button>
                  </td>
                  </tr>
                );
              })
            }
          </tbody>
    </table>
    </div>

  </>

  )
}

export default Watchlist