import './CardPortfolio.css'
export default function CardPortfolio(props) {

    const portfolio = props.portfolio;

    return (
        <>
            <div className="card">

                <div className="card-container">
                    <div class="card-text">
                        <h2>{portfolio.nombre}</h2>
                        <p>{portfolio.descripcion}</p>
                    </div>
                    <div class="card-image">
                        <img src={portfolio.img} alt="" className="img" />
                    </div>
                    <div class="card-lenguajes">
                            <p>{portfolio.lenguaje}</p>
                            <div class="value">32</div>
                            <div class="type">comments</div>
                    </div>
                    <div class="card-urls">
                        <p>Enlace a GitHub: {portfolio.enlace}</p>
                        <p>Despliegue: {portfolio.despliegue}</p>
                    </div>
                    <div className= "card-buttons">
                        <button onClick={() => props.editPortfolio(portfolio)}> Editar </button>
                        <button onClick={() => props.deletePortfolio(portfolio)}> Eliminar </button>
                    </div>
                    </div>
            </div>
        </>
    )
}
