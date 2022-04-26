function Filters () {

    return (
        <>
            <input placeholder="Select genre" type="text" list="Suggestions" multiple />
            <datalist id="Suggestions">
                <option>Adventure</option>
                <option>Action</option>
                <option>Drama</option>
                <option>Thriller</option>
                <option>Fantasy</option>
                <option>Horror</option>
                <option>Sci-Fi</option>

            </datalist>
        </>   
    )
}

export default Filters