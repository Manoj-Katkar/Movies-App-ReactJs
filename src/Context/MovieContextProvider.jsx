import React, { useEffect, useState } from 'react'
import MovieContext from './MovieContext'

const MovieContextProvider = (props) => {

    // !step 2 providing the context 
    /**
     * *here props re-present the all the childrens UserContextProvider in the object having the array which re-present the how many childrens are there 
     * *inside UserContextProvider global kind of  state 
     * 
     * ^Whatever the data you want that all the childrens should able to access provide that as an value within MovieContext.Provider
     */


    // !Global state or data will be below 

    // All users fav movies will get added in watchlist state Array 
    // !we have done this lifting up the state from the watchlist component 
    const [watchlistArray , setWatchlistArray] = useState([]);


    // Initialize watchlistArray from local storage when the component mounts
    // !means when you are rendering Movies again from the watchlist in the UI read the data from the localStorage and make it as the state value 
    
    useEffect(() => {
        const savedWatchlist = JSON.parse(localStorage.getItem("watchlistArray")) || [];
        setWatchlistArray(savedWatchlist);
    }, []);



    // now to add the new movie that user likes in the watchlist array I will create the one function for that 
    const addToWatchlist = (movie) => {
        const updatedWatchlist = [...watchlistArray , movie];
        setWatchlistArray(updatedWatchlist)

        // then add it in the local storage 
        localStorage.setItem("watchlistArray" , JSON.stringify(updatedWatchlist))

        
    }

    const removeFromWatchlist = (movie) => {
    const filteredWatchlistArray = watchlistArray.filter((currentMovie) => {
        if(currentMovie.id !== movie.id){
        return true;
        }
        else{
        return false;   //means if it is same remove that it should not be present in the filtered array 
        }
    });

    setWatchlistArray(filteredWatchlistArray);

    localStorage.setItem("watchlistArray" , JSON.stringify(filteredWatchlistArray))
    }


  return (
    <MovieContext.Provider value={{watchlistArray , setWatchlistArray , addToWatchlist , removeFromWatchlist}}>
        {props.children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider