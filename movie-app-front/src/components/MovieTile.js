import { NavLink } from "react-router-dom"
import Button from "./Button"
import React, {useState, useContext} from 'react'
import {useFavContext, FavContext} from '../contexts/FavContext'


const MovieTile = ({item, handler}) => {
    const getFav = useFavContext()

    const addToFav = (event) => {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            credentials: "include",
            headers: { 'Content-Type': 'application/json'},
        };

    fetch(`/users/favorites/${item.title}`, requestOptions)
        .then(res =>res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    getFav()
    
} 

    return (
        <div className="movieTile">
            
            <div className="imgContainer">
            <img src={item.poster} alt={item.title} />
            <Button onClick={addToFav} text={<div className="iconFav"><i  className="fa-solid fa-star"></i></div>} />
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