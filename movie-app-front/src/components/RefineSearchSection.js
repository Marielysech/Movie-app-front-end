import Button from './Button'
import Filters from './Filters'
import Searchbar from './SearchBar'
import React, {useState, useEffect} from 'react'



function RefineSearchSection ({variablesSearchbar}) {
   
   const [searchHandler, valueSearch, captureInputSearch, setValueSearch] = variablesSearchbar


    console.log('HERREEEE')
    console.log(variablesSearchbar)
    console.log(searchHandler, valueSearch, captureInputSearch, setValueSearch)

    //{searchHandler, valueSearch, captureInputSearch, setValueSearch,  VARTODEF, captureInputFIlter, textbutton, handlerFilters, valueFilter}

    return (
        <div className="RefineSearchSection">
 <form>
            <input 
                placeholder="Search movies here..." 
                value={valueSearch}               
                onChange={captureInputSearch}
            ></input>
            <p>Typed Value: {valueSearch}</p>
            <Button text="Search" onClick={searchHandler}/>
        </form>
       
            {/* <span><Button text="Sort" handler={VARTODEF} /></span> */}
            {/* <span><Searchbar variablesSearchbar={variablesSearchbar} /></span> */}
            {/* <span><Filters 
            value={valueFilter} 
            captureInput={captureInputFIlter} 
            text={textbutton} 
            handler={handlerFilters} /></span> */}

        </div>
    )
}

export default RefineSearchSection