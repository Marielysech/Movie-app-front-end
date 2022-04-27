import React, {useState} from 'react'
import MovieTile from './MovieTile';

const MovieList = ({movies}) => {

    const [moviesList, setMoviesList] = useState([])

    fetch('/movies')
    .then(response => response.json())
    .then(data => setMoviesList(data.movies))
    .catch(err => console.log(err))


    return (
        <>
        <div className="MovieContainer">
             {moviesList.map(item => 
                <MovieTile item={item} />
            )}
        </div>
        </>
    )
}


export default MovieList;
