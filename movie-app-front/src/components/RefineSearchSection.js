import Button from './Button'
import Filters from './Filters'
import Searchbar from './SearchBar'


function RefineSearchSection () {

    return (
        <div className="RefineSearchSection">

            <span><Button text="Sort" /></span>
            <span><Searchbar /></span>
            <span><Filters /></span>

        </div>
    )
}

export default RefineSearchSection