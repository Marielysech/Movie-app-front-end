function Button ({text, handler}) {

    return (
        <>
        <button className="button" onClick={handler}>{text}</button>
        </>
    )
}

export default Button