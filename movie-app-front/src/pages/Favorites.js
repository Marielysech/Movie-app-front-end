import Footer from "../components/Footer";
import React, {useState, useEffect} from 'react'
import MovieList from "../components/MovieList";
import NavBar from "../components/NavBar";

const FavoritesMovies = () => {

    const [favList, setfavList] = useState([])
    const [initialFavList, setinitialFavList] = useState([])

    function getFav() {
        fetch('/users/favorites')
        .then(response => response.json())
        .then(data => {
          setfavList(data.favUserMovies) 
          setinitialFavList(data.favUserMovies) })
        .catch(err => console.log(err))
      
    }

    useEffect( () => {getFav()}, [favList])


    return (
        <>
            <NavBar />
            <h2 className="introText">Favorites Movies</h2>
            {favList.length > 0 ?
            <MovieList fetch={getFav} moviesList={favList} setMoviesList={setfavList} initialMovieList={initialFavList}/> : <p>You don't have any favorites yet !</p> }
            <Footer />
        
        </>
    )
}

export default FavoritesMovies;