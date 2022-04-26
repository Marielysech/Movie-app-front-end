const MovieList = ({movies}) => {

    console.log(movies[0].Images[0])
    const random = () => Math.random();

    return (
        <>
        <h1>MOVIESLIST COMPONENT</h1>
        <div className="MovieContainer">
            {movies.map(item => 
                <span key={random()}>
                   
                     <img src={item.Images[0]} />
                     <p> {item.Title} </p>
                     <p> {item.Genre} </p>
                   
                </span>   
            )}
    
        </div>        
        </>
        
    )
}


export default MovieList;



    //     <div>
    //     <% for (let i=0; i<movies.length; i++) { %>
    //     <span> <img src="<%= movies[i].poster %>" alt=""></span>
    //     <% } %>
    //   </div>
