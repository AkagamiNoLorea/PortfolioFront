import './Footer.css'
import { NavLink } from "react-router-dom"

const footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="social-items">
                    <a href="https://www.linkedin.com/in/aidahc/" target='_blank'><i class="fa-brands fa-linkedin" ></i></a>
                    <a href="https://github.com/AkagamiNoLorea" target='_blank'><i class="fa-brands fa-github" ></i></a>
                    <a href="mailto:herraiz_1992@hotmail.com" target='_blank'><i class="fa-regular fa-envelope" ></i></a>
                </div>
                <ul class="list">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <a href="#">Sobre mi</a>
                    </li>
                    <li>
                        <a href="#">Habilidades y Tecnologias</a>
                    </li>
                    <li>
                        <NavLink to="/myprojects">Mis proyectos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contacto</NavLink>
                    </li>
                </ul>
                <p class="copyright"> @AkagamiNoLorea</p>
            </footer>
        </>
    )
}

export default footer