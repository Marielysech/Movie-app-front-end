import Button from "./Button"
import React, {useState, useEffect} from 'react'

function SearchBar({allProps}) {

    const [searchHandler, value, setValue, captureInputSearch, resetHandler] = allProps



return (
    <>  
        <form className="searchForm">
             <input 
                placeholder="Search movies here..." 
                value={value}               
                onChange={captureInputSearch}
            ></input>
            <Button text="Search" onClick={searchHandler}/>
            <Button text="Reset filters" onClick={resetHandler}/>

        </form>      
       
    </>
   
    )
}

export default SearchBar