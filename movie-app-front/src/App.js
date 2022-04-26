import logo from './logo.svg';
import './App.css';
// import React from 'react'
import "./index.css"
import Navbar from './components/NavBar'
import Login from './components/Login'
import Searchbar from './components/SearchBar'
import Filters from './components/Filters'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import moviesData from './movies'
 console.log(moviesData)


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
      <h1>
        <a href="http://localhost:3000/">Movie App</a> 
      </h1>
      <Searchbar />
      {/* <Filters /> */}
      <MovieList movies={moviesData}/>
      {/* <Footer /> */}

    </div>
  );
}

export default App;
