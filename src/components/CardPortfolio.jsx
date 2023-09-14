export default function CardPortfolio (props) {
    
    const portfolio = props.portfolio;
    
    return (
        <>
        <div className="card">
            
            <div className="contenedor-datos">
                <h3>{portfolio.nombre}</h3>
                <p>{portfolio.descripcion}</p>
                <img src ={portfolio.img} alt="" className="img"/> 
                <p>{portfolio.lenguaje}</p>
                <p>{portfolio.enlace}</p>
                <p>{portfolio.despliegue}</p>
            </div>
            <div className="buttons">
                <button onClick={() => props.editPortfolio(portfolio) }> Editar </button>
                <button onClick={() => props.deletePortfolio(portfolio) }> Eliminar </button>
            </div>
        </div>
        </>
    )
}
