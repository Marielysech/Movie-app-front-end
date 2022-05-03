import React, {useState, useEffect, useRef} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
// import React from 'react'
import "./index.css"
import Register from './components/Register';
import Login from './components/Login'
import Home from './pages/Home';
import Auth from './pages/Auth';
import Movie from './pages/Movie'
import NotFound from './pages/Notfound';
import FavoritesMovies from './pages/Notfound';

function App() {

  const [moviesList, setMoviesList] = useState([])
  const [initialML, setInitialML] = useState([])
 
  function fetchMovies() {
    fetch('/movies')
    .then(response => response.json())
    .then(data => {
      const movies= data.movies
      setMoviesList(movies) 
      setInitialML(movies) 
    .catch(err => console.log(err))
  })
}

useEffect( () => {fetchMovies()}, [])

  return (
    <div className="App">
          <Router>
            <main>
              <Routes>
                <Route path="/" element={<Home moviesList={moviesList} setMoviesList={setMoviesList} initialMovieList={initialML}/>}/>
                <Route path="/auth/*" element={<Auth />} >
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                </Route>
                <Route path="movies/:movieId" element={<Movie moviesList={moviesList} setMoviesList={setMoviesList}  />} />
                <Route path="favorites" element={<FavoritesMovies />} />
                <Route path="*" element={<NotFound />}/>
              </Routes>
            </main>
          </Router>

    </div>
  );
}

export default App;