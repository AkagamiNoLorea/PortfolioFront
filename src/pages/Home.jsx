
import { NavLink } from "react-router-dom"
import ShowPortfolios from "../components/ShowPortfolios";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Aida Herraiz</h1>
        <NavLink to ="/myprojects ">
            <button>Mis proyectos</button></NavLink></header>
    </div>
  )
}

export default Home;