const MovieTile = ({item}) => {
    
    return (
        <div className="movieTile">
            <img src={item.poster} alt={item.title} />
            <p className="title"> {item.title} </p>
            <p className="category"> {item.category} </p>
         </div>   
    )
}

export default MovieTile