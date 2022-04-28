import Button from './Button'
import Filters from './Filters'
import Searchbar from './SearchBar'
import React, {useState, useEffect} from 'react'



function RefineSearchSection ({allProps}) {
   


    return (
        <div className="RefineSearchSection">
            
            {/* <span><Button text="Sort" handler={VARTODEF} /></span> */}
            <span><Searchbar allProps={allProps} /></span>
            {/* <span><Filters 
            value={valueFilter} 
            captureInput={captureInputFIlter} 
            text={textbutton} 
            handler={handlerFilters} /></span> */}

        </div>
    )
}

export default RefineSearchSection