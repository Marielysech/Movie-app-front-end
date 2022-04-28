import Button from "./Button"
import React, {useState, useEffect} from 'react'

function SearchBar({allProps}) {

    const [searchHandler, value, setValue, captureInputSearch] = allProps



return (
    <>  
        <form>
             <input 
                placeholder="Search movies here..." 
                value={value}               
                onChange={captureInputSearch}
            ></input>
            <Button text="Search" onClick={searchHandler}/>

        </form>      
       
    </>
   
    )
}

export default SearchBar