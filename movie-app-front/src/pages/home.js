import Intro from "../components/Intro"
import MovieList from "../components/MovieList"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"


const Home = ({moviesList, setMoviesList}) => {


return (
    <>
    
    <NavBar />
    <Intro />
    <MovieList moviesList={moviesList} setMoviesList={setMoviesList}/>
    <Footer />
    
    </>
)

}

export default Home