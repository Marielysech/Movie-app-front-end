import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const Auth = () => {

    return (
        <>
            <NavBar />
            <div className="authContainer">
            <Outlet />
            </div>
            <Footer />
        </>
    )

}

export default Auth