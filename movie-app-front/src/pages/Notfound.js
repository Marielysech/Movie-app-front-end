import { NavLink } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import logo from "../assets/barackSorry.gif"

const NotFound = () => {
    return (
        <>
            <NavBar />
            <h2>ERROR 404 : Something went wrong and the page couldn't be loaded</h2>

            <img src={logo} alt="loading..." />
            <br/>
            <NavLink to='/'>Return to home</NavLink>
            <Footer />
        </>
    )
}

export default NotFound