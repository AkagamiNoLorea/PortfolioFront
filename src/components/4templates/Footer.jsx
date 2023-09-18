import './Footer.css'
import { NavLink } from "react-router-dom"

const footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="social-items">
                    <a href="https://www.linkedin.com/in/aidahc/" target='_blank'><i className="fa-brands fa-linkedin" ></i></a>
                    <a href="https://github.com/AkagamiNoLorea" target='_blank'><i className="fa-brands fa-github" ></i></a>
                    <a href="mailto:herraiz_1992@hotmail.com" target='_blank'><i className="fa-regular fa-envelope" ></i></a>
                </div>
                <ul className="list">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutme">Sobre mi</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills">Habilidades y Tecnologias</NavLink>
                    </li>
                    <li>
                        <NavLink to="/myprojects">Mis proyectos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contacto</NavLink>
                    </li>
                </ul>
                <p className="copyright"> @AkagamiNoLorea 2023{'\n'} </p>
            </footer>
        </>
    )
}

export default footer