import Footer from "../components/Footer";
import MovieTile from "../components/MovieTile";
import NavBar from "../components/NavBar";

const FavoritesMovies = () => {

    const removeFromFav = (id) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            //TODO : adapt  with backend var
            body: JSON.stringify({ id: id })
          };
    
          //TODO adapt fecth link
          fetch(`/tasks/remove/${id}`, requestOptions)
          .then(res => res.json())
          .then(data => {console.log(data.tasks)});
          getTasks('/tasks')
    }

    return (
        <>
            <NavBar />
            <MovieTile />
            <Button
                color="red"
                text="delete task"
                handler={() => removeFromFav(item._id)}
            />
            <Footer />
        
        </>
    )
}

export default FavoritesMovies;