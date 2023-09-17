import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './FormsPortfolio.css'

const url = "http://localhost:8080/api/portfolio";

const DeletePortfolio = () => {
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

  const goBack = () => {
    navigate("/");
  };

  const handleDeletePortfolio = async () => {
    try {
      await axios.delete(`${url}/${portfolioId}`);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <form>
        <div className="applicationForm">
          <h2>Eliminar el proyecto {portfolio.nombre} </h2>
        </div>
        <h3>¿Estás seguro de que quieres eliminar este proyecto?</h3>
        <div className='form2Buttons'>
          <button className='formButton' onClick={handleDeletePortfolio}><i class="fa-solid fa-check"></i> Eliminar</button>
          <button className='formButton' type="button" onClick={goBack}><i class="fa-solid fa-xmark"></i>Cancelar</button>
        </div>
    </form>
    </>
  );
};

export default DeletePortfolio;