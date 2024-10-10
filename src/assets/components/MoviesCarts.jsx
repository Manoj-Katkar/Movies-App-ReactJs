import React from 'react'

const MoviesCarts = ({currentMovie , uniqueKey , addToWatchlist , removeFromWatchlist,  isAddedToWatchList}) => {
  return (
    <div key={uniqueKey}
    className="h-[50vh] w-[240px] bg-center bg-cover rounded-xl hover:scale-110 transition-transform duration-700 cursor-pointer flex flex-col justify-end relative my-4"
    style={{
      backgroundImage : `url(https://image.tmdb.org/t/p/original${currentMovie.poster_path})`
    }}
>
    {/* lets take the one div to add the heart emoji */}
    {/* now on click of this icon that movie should get added in the my watchlist component where the state is there watchlistArray */}

    {/* now doing the conditional rendering to display the heart or the cross icons so to identify that movie is already added in the watchlist Array  */}

    {
      isAddedToWatchList(currentMovie)?
        // !means it is already added in the watchlist I have to give the functionality to the user to remove that from watchlist 
        <div 
        onClick={() => {
          removeFromWatchlist(currentMovie)
        }}
        className='m-4 flex justify-center h-8 w-8 items-center rounded-g bg-gray-900/60 absolute top-0 left-44'>
          ❌
        </div>
      :
        <div 
        onClick={() => {
          addToWatchlist(currentMovie)
        }}
        className='m-4 flex justify-center h-8 w-8 items-center rounded-g bg-gray-900/60 absolute top-0 left-44'>
          ❤
        </div>
      
    }
    
    <div className='text-red-50 p-2 text-center bg-gray-700'
    >
      {currentMovie.title}
    </div>
</div>
  )
}

export default MoviesCarts