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
  const [htemlValue, setHtemlValue] = useState('')
  const [cssValue, setCssValue] = useState('')
  const [jsValue, setJsValue] = useState('')
  const [javaValue, setJavaValue] = useState('')
  const [frameworksAndLibraries, setFrameworksAndLibraries] = useState('')
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
        setHtemlValue(response.data.htemlValue);
        setCssValue(response.data.cssValue);
        setJsValue(response.data.jsValue);
        setJavaValue(response.data.javaValue);
        setFrameworksAndLibraries(response.data.frameworksAndLibraries);
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
      htemlValue: htemlValue,
      cssValue: cssValue,
      jsValue: jsValue,
      javaValue: javaValue,
      frameworksAndLibraries: frameworksAndLibraries,
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
            <label>Lenguajes</label>
            <div className='formGrid'>
              <div className='formGridPart'>
                <label>HTML</label>
                <input placeholder="Ingrese solo valor numerico" type="text" defaultValue={portfolio.htemlValue} onChange={(e) => setHtemlValue(e.target.value)} />
                <label>CSS</label>
                <input placeholder="Ingrese solo valor numerico" type="text" defaultValue={portfolio.cssValue} onChange={(e) => setCssValue(e.target.value)} />
              </div>
              <div className='formGridPart'>
                <label>Javascript</label>
                <input placeholder="Ingrese solo valor numerico" type="text" defaultValue={portfolio.jsValue} onChange={(e) => setJsValue(e.target.value)} />
                <label>Java</label>
                <input placeholder="Ingrese solo valor numerico" type="text" defaultValue={portfolio.javaValue} onChange={(e) => setJavaValue(e.target.value)} />
              </div>
            </div>
            <div>
              <label>Frameworks y librerias</label>
              <input placeholder="Describe tu proyecto..." type="text" defaultValue={portfolio.frameworksAndLibraries} onChange={(e) => setFrameworksAndLibraries(e.target.value)} />
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