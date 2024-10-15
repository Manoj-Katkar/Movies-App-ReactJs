import axios from "axios";
import movieSlice from "../featuresSlice/movie/movieSlice"

let actions = movieSlice.actions;

const fetchMoviesMiddleware = (pageNo) => {

    return async (dispatch) => {
        
        try{
            // first I have to make the loading as true so first I have to dispatch that thing
            
            dispatch(actions.moviesLoading());

            //&then now I have to fetch the all the movies 

            // but here we will use fetch 

            let response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=39b6e395d9e668e23e0c51b81f844ad1&language=en-US&page=${pageNo}`);

            if(!response.ok){
                //means I did not get the any response then I have to throw the new Error 
                throw new Error('Not able to get the data from API')
            }

            let AllMovies = await response.json();

            console.log("AllMovies" , AllMovies);  //AllMovies is object inside .results all movies in array format are there 
            

            //!Now I have to update the movies state using dispatch 

            dispatch(actions.moviesData(AllMovies.results));   //this payload I am transfering will update the state 


        }
        catch(error){
            //if I get the error then I have to make sure that error se to true 
            dispatch(actions.movieError());
        }
    }
}

export default fetchMoviesMiddleware

