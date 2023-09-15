import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

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
    <div>
      <div className="form">
        <h2>Eliminar el proyecto {portfolio.nombre} </h2>
        <p>¿Estás seguro de que quieres eliminar este proyecto?</p>
        <button onClick={handleDeletePortfolio}>Eliminar</button>
        <button type="button" onClick={goBack}>Cancelar</button>
      </div>
    </div>
  );
};

export default DeletePortfolio;