import Button from "./Button"

function Filters ({value, captureInput, text, handler}) {

    return (
        <>
            <form>
                <input placeholder="Select genre" type="text" list="Suggestions" multiple value={value} onChange={captureInput} />
                <datalist id="Suggestions">
                    <option>Adventure</option>
                    <option>Action</option>
                    <option>Drama</option>
                    <option>Thriller</option>
                    <option>Fantasy</option>
                    <option>Horror</option>
                    <option>Sci-Fi</option>
                </datalist>
                <Button text={text} handler={handler}/>
            </form>  
        </>   
    )
}

export default Filters