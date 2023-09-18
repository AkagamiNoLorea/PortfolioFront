import { Outlet } from "react-router-dom"
import Navbar from "../components/4templates/Navbar"
import Footer from "../components/4templates/Footer"

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <main>
                <Outlet />
            </main>
            <div className="bottom-position"><Footer/></div>
            
            {/*<Footer/>*/}
        </div>
    )
}
export default Layout