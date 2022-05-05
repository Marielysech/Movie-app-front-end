import Footer from "../components/Footer";
import React, {useState, useEffect} from 'react'
import MovieList from "../components/MovieList";
import NavBar from "../components/NavBar";
import FavContextProvider from "../contexts/FavContext";

const FavoritesMovies = () => {

    const [favList, setfavList] = useState([])
    const [initialFavList, setinitialFavList] = useState([])

    function getFav() {
        fetch('/users/favorites')
        .then(response => response.json())
        .then(data => {
          console.log(data.favUserMovies)
          setfavList(data.favUserMovies) 
          setinitialFavList(data.favUserMovies) 
          console.log('this is favList ' + favList)
        })
        .catch(err => console.log(err))
      
    }

    useEffect( () => {getFav()}, [])
    console.log('this is ' + favList)


    return (
        <>
            <FavContextProvider favFetch={getFav()}>
            <NavBar />
            <h2 className="introText">Favorites Movies</h2>
            {favList.length > 0 ?
            <MovieList fetch={getFav} moviesList={favList} setMoviesList={setfavList} initialMovieList={initialFavList}/> : <p>You don't have any favorites yet !</p> }
            <Footer />
            </FavContextProvider>
        
        </>
    )
}

export default FavoritesMovies;