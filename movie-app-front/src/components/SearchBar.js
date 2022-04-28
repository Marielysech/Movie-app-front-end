import Button from "./Button"
import React, {useState, useEffect} from 'react'

function SearchBar({variablesSearchbar}) {

    const [searchHandler, valueSearch, captureInputSearch, setValueSearch] = variablesSearchbar

    console.log("here it's the searchbAr")
    console.log(variablesSearchbar)

    console.log(valueSearch, captureInputSearch, setValueSearch)

const [value, setValue] = useState("")
return (
    <>        
        <form>
            <input 
                placeholder="Search movies here..." 
                value={valueSearch}               
                onChange={captureInputSearch}
            ></input>
            <p>Typed Value: {valueSearch}</p>
            <Button text="Search" onClick={searchHandler}/>
        </form>
       
    </>
   
    )
}

export default SearchBar