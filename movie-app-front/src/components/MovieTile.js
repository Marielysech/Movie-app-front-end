import { NavLink } from "react-router-dom"
import Button from "./Button"

const MovieTile = ({item, handler}) => {
    
    return (
        <div className="movieTile">
            
            <div className="imgContainer">
            <img src={item.poster} alt={item.title} />
            <Button text={<div className="iconFav"><i  className="fa-solid fa-star"></i></div>} />
            </div>
            <NavLink to={`/movies/${item.title}`}>
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