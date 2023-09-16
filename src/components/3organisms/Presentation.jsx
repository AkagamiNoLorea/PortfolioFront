import React, { useState } from 'react';
import './Presentation.css'
import drawportrait from '../../assets/BWProfileDrawingReady.png'
import realportrait from '../../assets/BWProfileRealReady.png'

const Presentation = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="grid presentingMe">
            <div className={`left ${hovered === 'left' ? 'hovered' : ''}`} onMouseEnter={() => setHovered('left')} onMouseLeave={() => setHovered(null)}>
                <h1>Habilidades y tecnología</h1>
                <img className="drawportrait" src={drawportrait} alt="Dibujo en blanco y negro" />
            </div>

            <div className={`right ${hovered === 'right' ? 'hovered' : ''}`} onMouseEnter={() => setHovered('right')} onMouseLeave={() => setHovered(null)}>
                <h1>Quién soy más allá del código</h1>
                <img className="realportrait" src={realportrait} alt="Retrato real" />
            </div>
        </div>
    );
}

export default Presentation