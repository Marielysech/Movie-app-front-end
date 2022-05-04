import './App.css';
import "./index.css"
import React, {useState, useEffect, useRef} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login'
import Home from './pages/Home';
import Auth from './pages/Auth';
import Movie from './pages/Movie'
import NotFound from './pages/Notfound';
import FavoritesMovies from './pages/Favorites';
import UserContextProvider from './contexts/UserContext';

function App() {

  const defaultUser = {name:"Stranger", email: "stranger@gmail.com"}

  const [moviesList, setMoviesList] = useState([])
  const [initialML, setInitialML] = useState([])
  const [userInfo, setUserInfo] = useState(defaultUser)
  console.log(userInfo.name)
 
  function getMovies() {
    fetch('/movies')
    .then(response => response.json())
    .then(data => {
      const movies= data.movies
      setMoviesList(movies) 
      setInitialML(movies) 
    })
    .catch(err => console.log(err))
  
}

useEffect( () => {getMovies()}, [])

  return (
    <div className="App">
        <UserContextProvider user={{userInfo, setUserInfo}}>
          <Router>
            <main>
              <Routes>
                <Route path="/" element={<Home moviesList={moviesList} setMoviesList={setMoviesList} initialMovieList={initialML}/>}/>
                <Route path="/auth/*" element={<Auth />} >
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                    <Route path="logout" element={<Register/>} />
                    {/* <Route path="*" element={<NotFound />}/> */}
                </Route>
                <Route path="movies/:movieId" element={<Movie moviesList={moviesList} setMoviesList={setMoviesList}  />} />
                <Route path="favorites" element={<FavoritesMovies />} />
                <Route path="*" element={<NotFound />}/>
              </Routes>
            </main>
          </Router>
          </UserContextProvider> 
     

    </div>
  );
}

export default App;