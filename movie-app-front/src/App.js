import React, {useState, useEffect} from 'react'
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


function App() {

  const [moviesList, setMoviesList] = useState([])

  useEffect( () => {
  fetch('/movies')
  .then(response => response.json())
  .then(data => setMoviesList(data.movies))
  .catch(err => console.log(err))}, [])

  return (
    <div className="App">
          <Router>
            <main>
              <Routes>
                <Route path="/" element={<Home moviesList={moviesList} setMoviesList={setMoviesList}/>}/>
                <Route path="/auth/*" element={<Auth />} >
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                </Route>
                <Route path="movies/:movieId" element={<Movie moviesList={moviesList} setMoviesList={setMoviesList} />} />
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </main>
          </Router>

    </div>
  );
}

export default App;