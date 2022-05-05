import { NavLink } from "react-router-dom"
import Button from "./Button"


const MovieTile = ({item, handler}) => {
    let favButtonClassName = ""

    const addToFav = (event) => {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            credentials: "include",
            headers: { 'Content-Type': 'application/json'},
        };

    fetch(`/users/favorites/${item.title}`, requestOptions)
        .then(res =>res.json())
        .then(data => {
            data.title ? favButtonClassName="iconFavAdded" : favButtonClassName="iconFav"
        })
        .catch(error => console.log(error))
} 

    return (
        <div className="movieTile">
            
            <div className="imgContainer">
            <img src={item.poster} alt={item.title} />
            <Button onClick={addToFav} className={favButtonClassName} text={<div><i  className="fa-solid fa-star"></i></div>} />
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