import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './assets/components/NavBar'
import Home from './assets/components/Home'
import Watchlist from './assets/components/Watchlist'
import { Routes , Route} from 'react-router-dom'
import MovieContextProvider from './Context/MovieContextProvider'



function App() {

  // !here for all I have to make the parent as the MovieContextProvider because it is providing the Context to consume to all I have to make all other components as the child of it then only they Can able to access the all the global state and it will solve the below issues reduce the code redundancy , state management , solve props drilling issue 


  return (
    <MovieContextProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/watchlist' element={<Watchlist/>}></Route>
      </Routes>
{/* 
      <Home/>
      <Watchlist/>
      <NavBar/> */}

      {/* Note : React is the single page application I have implemented the client side routing but but when user is clicking on watchlist at that time react knows what it should show but when I do re-fresh and then it is not working because at that time I am asking to server but server does not know where is watchlist so for that I have to re-direct the server to my react application so the react application will handle it 
      
      To resolve the above issue : 
                  i)step 1 : in public folder I will create the one file name as _redirects
                  ii) then in that file I have to write the below code (start means any route)
                  iii) code => 
                            /* /index.html 200        (means redirect to my react application )
      */}

    </MovieContextProvider>
  )
}

export default App
