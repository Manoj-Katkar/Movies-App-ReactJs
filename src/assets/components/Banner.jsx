import React, { useEffect, useState } from 'react'
import poster1 from '/images/bhool bhulaya poster.jpg'
import naturePoster from '/images/nature banner.jpg'
import suryavanshiPoster from '/images/suryavanshi.jpg'
import axios from 'axios'

const Banner = () => {
  

  // !so now I will use the useEffect hook because at the first rendering only I want my banner image 
  const [bannerImage , setBannerImage] = useState(suryavanshiPoster);

  const [title , setTitle] = useState('Placeholder Movie');


  useEffect(() => {
      // rather than fetch we will use axios which takes the url like fetch only 

      axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=39b6e395d9e668e23e0c51b81f844ad1&language=en-US&page=1`)
      .then((convertedResponseFromServer) => {
        // response.json()    //!not needed axios will give data in the javascript object only 
        console.log("convertedResponseFromServer");
        console.log(convertedResponseFromServer);

        // now I have to update the state values for the both banner and also the name of the trending movie 

        setBannerImage(`https://image.tmdb.org/t/p/original${convertedResponseFromServer.data.results[0].backdrop_path}`);

        setTitle(convertedResponseFromServer.data.results[0].title);
      
      })
      .catch((error) => {
        console.log(error);
        
      })


  } , [])




  return (
    <div
        className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end my-12'

        // Now adding the inline css property 
        style={{
            // backgroundColor: "red"
            backgroundImage : `url(${bannerImage})`,
            backgroundSize: 'cover', // Optional: Adjusts the size of the background image
            backgroundPosition: 'center', // Optional: Centers the background image
            padding:"1rem"

        }}
    >
        <div
                className='text-white w-full text-center text-2xl animate-highlight'
        >
            {title}
        </div>
    </div>
  )
}

export default Banner