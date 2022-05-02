import { NavLink } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import logo from "../assets/lostInTheWood.gif"

const NotFound = () => {
    return (
        <>
            <NavBar />
            <h2>OUPS, it seems that you're not on the right path ! Try again without loosing yourself this time</h2>

            <img src={logo} alt="loading..." />
            <br/>
            <NavLink to='/'>Restart here !</NavLink>
            <Footer />
        </>
    )
}

export default NotFound