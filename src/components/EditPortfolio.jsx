import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

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
    <div>
      <div className="form">
      <h2>Editar Proyecto</h2>
      <form onSubmit={handleEditPortfolio}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={portfolio.nombre || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={portfolio.descripcion || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="img">Imagen:</label>
          <input
            type="text"
            id="img"
            name="img"
            value={portfolio.img || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lenguaje">Lenguajes:</label>
          <input
            type="text"
            id="lenguaje"
            name="lenguaje"
            value={portfolio.lenguaje || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="enlace">Enlace:</label>
          <input
            type="text"
            id="enlace"
            name="enlace"
            value={portfolio.enlace || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="despliegue">Despliegue:</label>
          <input
            type="text"
            id="despliegue"
            name="despliegue"
            value={portfolio.despliegue || ''}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Guardar cambios</button>
        <button type="button" onClick={goBack}>Cancelar</button>
      </form>
      </div>
    </div>
  );
};

export default EditPortfolio;