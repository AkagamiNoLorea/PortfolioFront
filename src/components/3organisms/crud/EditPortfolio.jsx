import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './FormsPortfolio.css'

const url = "https://portfolioback-production-00e6.up.railway.app/api/portfolio";

const EditPortfolio = () => {
  const [portfolio, setPortfolio] = useState({});
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [img, setImg] = useState('')
  const [lenguaje, setLenguaje] = useState('')
  const [enlace, setEnlace] = useState('')
  const [despliegue, setDespliegue] = useState('')
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { portfolioId } = useParams();

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get(`${url}/${portfolioId}`);
        setPortfolio(response.data);
        setNombre(response.data.nombre);
        setDescripcion(response.data.descripcion);
        setImg(response.data.img);
        setLenguaje(response.data.htmlValue);
        setEnlace(response.data.enlace);
        setDespliegue(response.data.despliegue);
      } catch (error) {
        setError(error.message);
      }
    };
    if (error) {
      return <p>Error: {error}</p>;
    }

    fetchPortfolio();
  }, [portfolioId]);

  const update = async (e) => {
    e.preventDefault()
    await axios.put(`${url}/${portfolioId}`, {
      nombre: nombre,
      descripcion: descripcion,
      img: img,
      lenguaje: lenguaje,
      enlace: enlace,
      despliegue: despliegue
    })
    navigate("/myprojects")
  }

  const goBack = () => {
    navigate("/myprojects");
  }


  return (
    <div className="savePortfolioForm">
      <form onSubmit={update}>
        <div className="applicationForm">
          <h1>Modificar un proyecto</h1>
        </div>
        <div className="formTable">
          <div>
            <label>Nombre</label>
            <input placeholder="Ingrese el titulo..." type="text" defaultValue={portfolio.nombre} onChange={(e) => setNombre(e.target.value)}/>
          </div>
          <div>
            <label>Descripcion</label>
            <input placeholder="Describe tu proyecto..." type="text" defaultValue={portfolio.descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
          </div>
          <div>
            <label>Imagen</label>
            <input placeholder="Ingrese url de imagen" type="text" value={portfolio.img} onChange={(e) => setImg(e.target.value)} />
          </div>
          <div>
            <label>Lenguajes:</label>
          <input type="text" id="lenguaje" name="lenguaje" value={portfolio.lenguaje || ''} onChange={(e) => setLenguaje(e.target.value)}/>
            </div>
          </div>
          <div>
            <label>Enlace a GitHub</label>
            <input placeholder="Ingrese url" type="text" defaultValue={portfolio.enlace} onChange={(e) => setEnlace(e.target.value)}/>
          </div>
          <div>
            <label>Despliegue</label>
            <input placeholder="Ingrese url" type="text" defaultValue={portfolio.despliegue} onChange={(e) => setDespliegue(e.target.value)}/>
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
