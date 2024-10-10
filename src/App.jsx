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

    </MovieContextProvider>
  )
}

export default App
