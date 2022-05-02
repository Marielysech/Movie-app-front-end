import { NavLink } from "react-router-dom"

const MovieTile = ({item, handler}) => {
    
    return (
        <div className="movieTile">
            <NavLink to={`/movies/${item.title}`}>
            <img src={item.poster} alt={item.title} />
            <p className="title"> {item.title} </p>
            </NavLink>
            
            <div className="rating">
                <p >{item.rating}/10</p>
            </div>
            <NavLink to='/'>
            <p className="category" id={item.category} onClick={handler}> {item.category} </p> </NavLink>
         </div>   
    )
}

export default MovieTile