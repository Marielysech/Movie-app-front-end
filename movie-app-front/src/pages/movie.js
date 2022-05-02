import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { useParams } from "react-router-dom"
import MovieTileSolo from "../components/movieTileSolo";

const Movie = ({moviesList, setMoviesList}) => {

    const params = useParams();

    const movieInfo = moviesList.filter(item => item.title === params.movieId) 
    console.log(movieInfo)

    function accessCategory (event) {
        let category = event.target.id
        console.log(category)
        const categorySearch = moviesList.filter(item => item.category === category) 
        setMoviesList(categorySearch) 
    }
    
  return (
    <>
        <NavBar />
        <div className="oneMovie">
        <MovieTileSolo item={movieInfo[0]} handler={accessCategory}/>
        
        </div>
        <Footer />    
    
    </>
  )

}

export default Movie