import { Outlet } from "react-router-dom"
import Navbar from "../components/templates/Navbar"
import Footer from "../components/templates/Footer"

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}
export default Layout