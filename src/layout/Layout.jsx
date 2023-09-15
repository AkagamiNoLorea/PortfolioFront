import { Outlet } from "react-router-dom"
import Navbar from "../components/4templates/Navbar"
import Footer from "../components/4templates/Footer"
import GeneralButton from "../components/1atoms/GeneralButton";

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <header>
        <h1>Aida Herraiz</h1>
        <GeneralButton />
      </header>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}
export default Layout