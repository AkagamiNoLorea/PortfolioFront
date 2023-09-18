import React from 'react'
import { NavLink } from "react-router-dom"
import './Navbar.css'

const navbar = () => {
    return (
        <div> <nav className="navigation navigation--inline">
            <NavLink to="/"><i className="icon-left fa-solid fa-house"></i></NavLink>
            <ul>
                <li>
                    <NavLink to="/aboutme"><i className="fa-solid fa-user-plus"></i>
                        <span className="invisible">{'\n'}Sobre mi</span></NavLink>
                </li>
                <li>
                    <NavLink to="/skills"><i className="fa-solid fa-list-check"></i>
                        <span className="invisible">{'\n'}Habilidades y Tecnologias</span></NavLink>
                </li>
                <li>
                    <NavLink to="/myprojects"><i className="fa-solid fa-diagram-project"></i>
                        <span className="invisible">{'\n'}Mis proyectos</span></NavLink>
                </li>
                <li>
                    <NavLink to="/contact"><i className="fa-solid fa-envelope-open-text"></i>
                        <span className="invisible">{'\n'}Contacto</span></NavLink>
                </li>
            </ul>
        </nav></div>
    )
}

export default navbar