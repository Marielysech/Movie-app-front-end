import React, {useState} from 'react'

const MovieList = ({movies}) => {

    const random = () => Math.random();

    const [moviesList, setMoviesList] = useState([])


    fetch('/movies')
    .then(response => response.json())
    .then(data => setMoviesList(data.movies))
    .catch(err => console.log(err))


    return (
        <>
        <h1>MOVIESLIST COMPONENT</h1>
        <div className="MovieContainer">
             {moviesList.map(item => 
                <span >
                     <img src={item.poster} />
                     <p> {item.title} </p>
                     <p> {item.category} </p>
                   
                </span>   
            )}
        </div>
        </>
        
    )
}


export default MovieList;
