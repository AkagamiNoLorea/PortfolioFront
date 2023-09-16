import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import CardPortfolio from "./CardPortfolio"


const url = "http://localhost:8080/api/portfolio"
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
            <div>
                <button onClick={() => navigate("/create")}>Crear Proyecto</button>
            </div>
            <div className="box">
                {
                    cards
                }
            </div>
        </>
    )
}

export default ShowPortfolios