import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './FormsPortfolio.css'

const url = "http://localhost:8080/api/portfolio";

const EditPortfolio = () => {
  const [portfolio, setPortfolio] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { portfolioId } = useParams();

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get(`${url}/${portfolioId}`);
        setPortfolio(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPortfolio();
  }, [portfolioId]);

  const handleInputChange = (event) => {
    setPortfolio({ ...portfolio, [event.target.name]: event.target.value });
  };

  const goBack = () => {
    navigate("/");
  }

  const handleEditPortfolio = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${url}/${portfolioId}`, portfolio);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="savePortfolioForm">
      <form onSubmit={handleEditPortfolio}>
        <div className="applicationForm">
          <h1>Modificar un proyecto</h1>
        </div>
        <div className="formTable">
          <div>
            <label>Nombre</label>
            <input placeholder="Ingrese el titulo..." type="text" value={portfolio.nombre || ''} onChange={handleInputChange} />
          </div>
          <div>
            <label>Descripcion</label>
            <input placeholder="Describe tu proyecto..." type="text" value={portfolio.descripcion || ''} onChange={handleInputChange} />
          </div>
          <div>
            <label>Imagen</label>
            <input placeholder="Ingrese url de imagen" type="text" value={portfolio.img || ''} onChange={handleInputChange} />
          </div>
          <div>
            <label>Lenguajes</label>
            <div className='formGrid'>
              <div className='formGridPart'>
                <label>HTML</label>
                <input placeholder="Ingrese solo valor numerico" type="text" value={portfolio.htemlValue || ''} onChange={handleInputChange} />
                <label>CSS</label>
                <input placeholder="Ingrese solo valor numerico" type="text" value={portfolio.cssValue || ''} onChange={handleInputChange} />
              </div>
              <div className='formGridPart'>
                <label>Javascript</label>
                <input placeholder="Ingrese solo valor numerico" type="text" value={portfolio.jsValue || ''} onChange={handleInputChange} />
                <label>Java</label>
                <input placeholder="Ingrese solo valor numerico" type="text" value={portfolio.javaValue || ''} onChange={handleInputChange} />
              </div>
            </div>
            <div>
              <label>Frameworks y librerias</label>
              <input placeholder="Describe tu proyecto..." type="text" value={portfolio.frameworksAndLibraries || ''} onChange={handleInputChange} />
            </div>
          </div>
          <div>
            <label>Enlace a GitHub</label>
            <input placeholder="Ingrese url" type="text" value={portfolio.enlace || ''} onChange={handleInputChange} />
          </div>
          <div>
            <label>Despliegue</label>
            <input placeholder="Ingrese url" type="text" value={portfolio.despliegue || ''} onChange={handleInputChange} />
          </div>
          <div className='form2Buttons'>
            <button className='formButton' type="submit"><i className="fa-regular fa-floppy-disk"></i> Guardar canvios</button>
            <button className='formButton' type="button" onClick={goBack}><i className="fa-solid fa-xmark"></i> Cancelar</button>
          </div>
        </div>
      </form >
    </div>
  );
};

export default EditPortfolio;