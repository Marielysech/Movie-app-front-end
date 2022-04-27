import logo from './logo.svg';
import './App.css';
// import React from 'react'
import "./index.css"
import Navbar from './components/NavBar'
import Login from './components/Login'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import moviesData from './movies'
import RefineSearchSection from './components/RefineSearchSection';
import Intro from './components/Intro'

function App() {

// const getMovie = () => {
//   fetch("LINK FROM BACKEND OR DB") 
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res)
//       fetchUsers(res)
//     })
// }

  return (
    <div className="App">
      <Navbar />
      <Intro />
      {/* <RefineSearchSection /> */}
      <MovieList movies={moviesData}/>
      {/* <Footer /> */}

    </div>
  );
}

export default App;
