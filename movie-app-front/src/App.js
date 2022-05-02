import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
// import React from 'react'
import "./index.css"
import Home from './pages/Home'
import Auth from './pages/Auth';
import Register from './components/Register';
import Login from './components/Login'

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
                <Route path="/home" element={<Home moviesList={moviesList} setMoviesList={setMoviesList}/>}/>
                <Route path="/auth/*" element={<Auth />} >
                    <Route path="login" element={<Login/>} />
                    <Route path="auth/register" element={<Register/>} />
                </Route>
              </Routes>
            </main>
          </Router>

    </div>
  );
}

export default App;