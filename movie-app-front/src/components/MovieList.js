import React, {useState, useEffect} from 'react'
import MovieTile from './MovieTile';
import RefineSearchSection from './RefineSearchSection';

const MovieList = ({moviesList, setMoviesList}) => {
    
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
        console.log('this is la putain de value' + value)
        const valueSearchCapital = firstLetterUpperCase(value)

        if (isNaN(value)) {
            //filtering movies per category
            const categorySearch = moviesList.filter(item => item.category === valueSearchCapital) 
            //filtering movies per title
            const titleSearch = moviesList.filter(item => item.title.includes(valueSearchCapital))
            categorySearch.length > 0 && setMoviesList(categorySearch) 
            titleSearch.length >0 && setMoviesList(titleSearch)
            setValue('')

        }   //filtering per years
        const yearSearch = moviesList.filter(item => item.year == valueSearchCapital)
        console.log('this is year' + yearSearch)

        yearSearch.length > 0 && setMoviesList(yearSearch)
        setValue('')
    }

    useState(() => searchHandler, [value])

//RefineSearchSection.Searchbar
const variablesSearchbar = [searchHandler, value, setValue, captureInputSearch]

    return (
        <>
            <RefineSearchSection allProps={variablesSearchbar}/>
            <div className="MovieContainer">
                {moviesList.map(item => 
                    <MovieTile item={item} />
                )}
            </div>
        </>
        
    )
}


export default MovieList
