import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
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

  const [moviesList, setMoviesList] = useState([])

  useEffect( () => {
  fetch('/movies')
  .then(response => response.json())
  .then(data => setMoviesList(data.movies))
  .catch(err => console.log(err))}, [])

  return (
    <div className="App">
      <Navbar />
      <Intro />
      {/* <RefineSearchSection movies={moviesList} /> */}
      <MovieList moviesList={moviesList} setMoviesList={setMoviesList}/>
      {/* <Footer /> */}

    </div>
  );
}

export default App;
