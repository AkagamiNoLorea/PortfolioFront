import './CardPortfolio.css'
{/*import './CardPortfolio.scss'*/}
export default function CardPortfolio(props) {

    const portfolio = props.portfolio;

    return (
        <>
            <div className="card">
                <div className="card-container">
                    <div className="card-text">
                        <h2>{portfolio.nombre}</h2>
                        <p>{portfolio.descripcion}</p>
                    </div>
                    <div className="card-image">
                        <img src={portfolio.img} alt="" className="img" />
                    </div>
                    <div className="card-text">
                        <p>{portfolio.lenguaje}</p>
                    </div>
                    <div className="card-urls">
                        <p> <a href={portfolio.enlace} target='_blank'>Enlace a GitHub</a></p>
                        <p> <a href={portfolio.despliegue} target='_blank'>Despliegue</a></p>
                    </div>
                    <div className="card-buttons">
                        <button onClick={() => props.editPortfolio(portfolio)}><i className="fa-solid fa-pen"></i> Editar </button>
                        <button onClick={() => props.deletePortfolio(portfolio)}><i className="fa-solid fa-xmark"></i> Eliminar </button>
                    </div>
                </div>
            </div>
        </>
    )
}
