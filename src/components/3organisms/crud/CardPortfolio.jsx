import './CardPortfolio.css'
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
                    <div className="card-lenguaje">
                        <p><h3>Lenguajes/Frameworks:</h3><br/>{portfolio.lenguaje}</p>
                    </div>
                    <div className="card-urls">
                        <p> Enlace a GitHub:<a href={portfolio.enlace} target='_blank'> {portfolio.enlace}</a></p>
                        <p> Despliegue:<a href={portfolio.despliegue} target='_blank'>{portfolio.despliegue}</a></p>
                    </div>
                    {/*<div className="card-buttons">
                        <button onClick={() => props.editPortfolio(portfolio)}><i className="fa-solid fa-pen"></i> Editar </button>
                        <button onClick={() => props.deletePortfolio(portfolio)}><i className="fa-solid fa-xmark"></i> Eliminar </button>
    </div>*/}
                </div>
            </div>
        </>
    )
}
