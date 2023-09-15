import React from 'react'
import { NavLink } from "react-router-dom"
import './Navbar.css'

const navbar = () => {
    return (
        <div> <nav class="navigation navigation--inline">
            <ul>
                <li>
                    <NavLink to="/aboutme"><i class="fa-solid fa-user-plus"></i>
                        <span class="invisible">About me</span></NavLink>
                </li>
                <li>
                    <NavLink to="/skills"><i class="fa-solid fa-list-check"></i>
                        <span class="invisible">Habilidades y Tecnologias</span></NavLink>
                </li>
                <li>
                    <NavLink to="/myprojects"><i class="fa-solid fa-diagram-project"></i>
                        <span class="invisible">Mis proyectos</span></NavLink>
                </li>
                <li>
                    <NavLink to="/contact"><i class="fa-solid fa-envelope-open-text"></i>
                        <span class="invisible">Contacto</span></NavLink>
                </li>
            </ul>
        </nav></div>
    )
}

export default navbar