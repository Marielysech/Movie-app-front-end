import Footer from "../components/Footer";
import React, {useState, useEffect} from 'react'
import MovieTile from "../components/MovieTile";
import NavBar from "../components/NavBar";

const FavoritesMovies = () => {

    const [favList, setfavList] = useState([])
    const [initialFavList, setinitialFavList] = useState([])



    function getFav() {
        fetch('/users/favorites')
        .then(response => response.json())
        .then(data => {
          const movies= data.movies
          setfavList(movies) 
          setinitialFavList(movies) 
        })
        .catch(err => console.log(err))
      
    }

    useEffect( () => {getFav()}, [])
    console.log(favList)


    return (
        <>
            <NavBar />
            <h2 className="introText">Favorites Movies</h2>
            {favList.length > 0 ?
            <MovieTile moviesList={favList} setMoviesList={setfavList} initialMovieList={initialFavList}/> : <p>You don't have any favorites yet !</p> }
            <Footer />
        
        </>
    )
}

export default FavoritesMovies;