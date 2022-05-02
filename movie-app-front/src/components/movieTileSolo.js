import { NavLink } from "react-router-dom"

const MovieTileSolo = ({item, handler}) => {
    
    return (
        <div className="movieTileSolo">
            
            <img src={item.poster} alt={item.title} />
            <p className="title"> {item.title} </p>
            <p>{item.plot}</p>
            <div className="rating">
                <p >{item.rating}/10</p>
            </div>
            <NavLink to='/'>
            <p className="category" id={item.category} onClick={handler}> {item.category} </p> </NavLink>
         </div>   
    )
}

export default MovieTileSolo