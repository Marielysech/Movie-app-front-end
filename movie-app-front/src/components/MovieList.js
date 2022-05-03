import React, {useState, useEffect} from 'react'
import MovieTile from './MovieTile';
import RefineSearchSection from './RefineSearchSection';

const MovieList = ({moviesList, setMoviesList, initialMovieList}) => {
    //RefineSearchSection.Searchbar
    const [value, setValue] = useState('')
    
    function firstLetterUpperCase(str) {
        let splitStr = str.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
     }

    const captureInputSearch = ((e) => setValue(e.target.value))
    
    function searchHandler (event) {
        event.preventDefault();
        const valueSearchCapital = firstLetterUpperCase(value)

        if (isNaN(value)) {
            //filtering movies per category
            const categorySearch = initialMovieList.filter(item => item.category === valueSearchCapital) 
            //filtering movies per title
            const titleSearch = initialMovieList.filter(item => item.title.includes(valueSearchCapital))
            categorySearch.length > 0 && setMoviesList(categorySearch) 
            titleSearch.length >0 && setMoviesList(titleSearch)
            setValue('')



        }  //filtering per years
        const yearSearch = initialMovieList.filter(item => item.year === valueSearchCapital)
        console.log('this is year' + yearSearch)

        yearSearch.length > 0 && setMoviesList(yearSearch)
        setValue('')
    }

    function resetHandler (event) {
        event.preventDefault();
        setMoviesList(initialMovieList)
        
    }

    function accessCategory (event) {
        let category = event.target.id
        console.log(category)
        const categorySearch = moviesList.filter(item => item.category === category) 
        setMoviesList(categorySearch) 
    }

    useState(() => searchHandler, [value])

//RefineSearchSection.Searchbar
const variablesSearchbar = [searchHandler, value, setValue, captureInputSearch, resetHandler]

    return (
        <>
            <RefineSearchSection allProps={variablesSearchbar}/>
            <div className="MovieContainer">
            {moviesList.map(item => 
                   <MovieTile item={item} handler={accessCategory}/>
                )}
            </div>
        </>
        
    )
}


export default MovieList
