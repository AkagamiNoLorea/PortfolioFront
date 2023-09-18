import './CardPortfolio.css'
import './CardPortfolio.scss'
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
                    <div className="card-lenguajes">
                        <p className="circular-progress hteml-{portfolio.htemlValue}">HTML: {portfolio.htemlValue}%</p>
                        <p className="circular-progress css-{portfolio.cssValue}">CSS: {portfolio.cssValue}%</p>
                        <p className="circular-progress js-{portfolio.jsValue}">JS: {portfolio.jsValue}%</p>
                        <p className="circular-progress java-{portfolio.javaValue}">Java: {portfolio.javaValue}%</p>
                    </div>
                    <div className="card-frameworks">
                        <div>Frameworks y librerias: {portfolio.frameworksAndLibraries}</div>
                    </div>
                    <div className="card-urls">
                        <p>Enlace a GitHub: {portfolio.enlace}</p>
                        <p>Despliegue: {portfolio.despliegue}</p>
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
