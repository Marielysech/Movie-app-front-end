import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { useParams } from "react-router-dom"
import MovieTile from "../components/MovieTile";


const Movie = ({moviesList, setMoviesList}) => {

    const params = useParams();

    const movieInfo = moviesList.filter(item => item.title === params.movieId) 
    

    function accessCategory (event) {
        let category = event.target.id
        console.log(category)
        const categorySearch = moviesList.filter(item => item.category === category) 
        setMoviesList(categorySearch) 
    }
    
  return (
    <>
        <NavBar />
        <MovieTile item={movieInfo} handler={accessCategory}/>
        <Footer />    
    
    </>
  )

}

export default Movie