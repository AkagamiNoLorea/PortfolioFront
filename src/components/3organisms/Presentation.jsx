import React, { useState } from 'react';
import './Presentation.css'
import drawportrait from '../../assets/BWProfileDrawingReady.png'
import realportrait from '../../assets/BWProfileRealReady.png'
import { NavLink } from "react-router-dom"
import CVButton from '../2molecules/CVButton';

const Presentation = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="grid-presentingMe">
            <div className="left">
                <NavLink to="/skills"><h1>Habilidades y tecnología</h1></NavLink>
                <CVButton/>
                <img className="drawportrait" src={drawportrait} alt="Dibujo en blanco y negro" />
            </div>
            <div className='right'>
                <NavLink to="/skills"><h1>Quién soy más allá del código</h1></NavLink>
                <img className="realportrait" src={realportrait} alt="Retrato real" />
            </div>
        </div>
    );
}

export default Presentation
