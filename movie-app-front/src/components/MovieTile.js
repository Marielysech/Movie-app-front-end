const MovieTile = ({item, handler}) => {
    
    return (
        <div className="movieTile">
            <img src={item.poster} alt={item.title} />
            <p className="title"> {item.title} </p>
            <p className="category" id={item.category} onClick={handler}> {item.category} </p>
         </div>   
    )
}

export default MovieTile