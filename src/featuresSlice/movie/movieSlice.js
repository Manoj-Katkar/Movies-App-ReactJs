import {createSlice} from '@reduxjs/toolkit'

const movieSlice = createSlice({
        name:"moviesSlice",
        initialState:{
            movies:null,
            error:false,
            loading : true,
        },
        reducers:{
            moviesLoading:((state , action) => {
                state.error = false;
                state.loading = true;
                state.movies = null;
            }),
            movieError:((state , action) => {
                state.error = true;
                state.loading = false;
                state.movies = null;
            }),
            moviesData:((state , action) => {
                state.error = false;
                state.loading = false;
                state.movies = action.payload
            })
        }

})

export default movieSlice