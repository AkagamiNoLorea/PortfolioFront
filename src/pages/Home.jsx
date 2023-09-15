import { NavLink } from "react-router-dom"
import DeleteButton from "../components/atoms/DeleteButton";
import EditButton from "../components/atoms/EditButton";
import GeneralButton from "../components/atoms/GeneralButton";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Aida Herraiz</h1>
        <DeleteButton />
        <EditButton />
        <GeneralButton />
      </header>
    </div>
  )
}

export default Home;