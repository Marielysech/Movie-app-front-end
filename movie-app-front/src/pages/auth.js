import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const Auth = () => {

    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )

}

export default Auth