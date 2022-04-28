import React, {useState, useEffect} from 'react'
import MovieTile from './MovieTile';
import RefineSearchSection from './RefineSearchSection';
import firstLetterUpperCase from '../HelperFct.js/inputChanges.ja';
import Button from './Button';

const MovieList = ({movies, setMoviesList}) => {

    //RefineSearchSection.Searchbar
    const [valueSearch, setValueSearch] = useState("")

    //RefineSearchSection.Buttton
    const [sort, setSort] = useState("")


    //RefineSearchSection.Filters
    const [valueFilter, setvalueFilter] = useState("")

    
    const captureInputSearch = ((e) => setValueSearch(e.target.valueSearch))

    const searchHandler = (event) => {
     event.preventDefault()
     const valueSearchCapital = firstLetterUpperCase(valueSearch)

       //filtering movies per category
        if (isNaN(valueSearch)) {
            console.log(valueSearch)
            const categorySearch = movies.filter(item => item.category === valueSearchCapital) 
            if (categorySearch.length > 0) {
                setMoviesList(categorySearch)
                setValueSearch('')
            } //filtering movies per title
                const titleSearch = movies.filter(item => item.title.includes(valueSearchCapital))
                setMoviesList(titleSearch)
                setValueSearch('')

        }   //filtering per years
        const yearSearch = movies.filter(item => item.year === valueSearchCapital)
        yearSearch.length > 0 && setMoviesList(yearSearch)
        setValueSearch('')
}

//array to pass to RefineSearchSection

const variablesSearchbar = [
    //RefineSearchSection.Searchbar
    searchHandler, valueSearch, setValueSearch, captureInputSearch]
    // //RefineSearchSection.Buttton
    // VARTODEF,    
    // //RefineSearchSection.Filters
    // valueFilter,captureInputFIlter, textbutton, handlerFilters
    // ]
    //onChange={(e) => setValue(e.target.value)}


    return (
        <>
        <form>
            <input 
                placeholder="Search movies here..." 
                value={valueSearch}               
                onChange={(e) => setValueSearch(e.target.valueSearch)}
            ></input>
            <p>Typed Value: {valueSearch}</p>
            <Button text="Search" onClick={searchHandler}/>
        </form>
        {/* <RefineSearchSection variablesSearchbar={variablesSearchbar}/> */}
        <form>
            {/* <input 
                placeholder="Search movies here..." 
                value={value}                     
                onChange={catchValue}
            ></input> */}
            {/* <Button text="Search" onClick={handler}/> */}
        </form>
        <div className="MovieContainer">
             {movies.map(item => 
                <MovieTile item={item} />
            )}
        </div>
        </>
    )
}


export default MovieList
