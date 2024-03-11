import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import CardPortfolio from "./CardPortfolio"


const url = "https://portfolioback-production-00e6.up.railway.app/api/portfolio"
const ShowPortfolios = () => {

    const [portfolios, setPortfolios] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllPortfolios()
    }, [])


    const getAllPortfolios = async () => {
        const response = await axios.get(url)
        let data = response.data;
        setPortfolios(data);
    }

    // create, read, update, delete 
    const handleEditPortfolio = (portfolio) => {
        navigate(`/edit/${portfolio.id}`)
    };

    const handleDeletePortfolio = (portfolio) => {
        navigate(`/delete/${portfolio.id}`);
    };

    const cards = portfolios.map((portfolio) => <CardPortfolio
        key={portfolio.id}
        portfolio={portfolio}
        editPortfolio={handleEditPortfolio}
        deletePortfolio={handleDeletePortfolio}
    />);

    return (
        <>
            {/*<div className="createButton">
                <button className="formButton" onClick={() => navigate("/create")}><i className="fa-solid fa-plus"></i> Crear Proyecto</button>
    </div>*/}
            <div className="box">
                {
                    cards
                }
            </div>
        </>
    )
}

export default ShowPortfolios