import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './FormsPortfolio.css'

const url = "https://portfolioback-production-00e6.up.railway.app/api/portfolio"

const SavePortfolio = () => {

    const [nombre, setNombre] = useState('')
    const [img, setImg] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [lenguaje, setLenguaje] = useState('')
    const [enlace, setEnlace] = useState('')
    const [despliegue, setDespliegue] = useState('')

    const navigate = useNavigate()

    const goBack = () => {
        navigate("/myprojects");
    }
    const store = async (e) => {
        e.preventDefault()
        {/*console.log(e)*/}
        await axios.post(url, { nombre: nombre, descripcion: descripcion, img: img, 
            lenguaje: lenguaje, enlace: enlace, despliegue: despliegue  })
        navigate("/")
    }

    return (
        <div className="savePortfolioForm">
            <form onSubmit={store}>
                <div className="applicationForm">
                    <h1>Subir un proyecto</h1>
                </div>
                <div className="formTable">
                    <div>
                        <label>Nombre</label>
                        <input placeholder="Ingrese el titulo..." type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div>
                        <label>Descripcion</label>
                        <input placeholder="Describe tu proyecto..." type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                    </div>
                    <div>
                        <label>Imagen</label>
                        <input placeholder="Ingrese url de imagen" type="text" value={img} onChange={(e) => setImg(e.target.value)} />
                    </div>
                    <div>
                        <label>Lenguajes</label>
          <input type="text" id="lenguaje" name="lenguaje" value={portfolio.lenguaje || ''} onChange={(e) => setLenguaje(e.target.value)}/>
                    </div>
                    <div>
                        <label>Enlace a GitHub</label>
                        <input placeholder="Ingrese url" type="text" value={enlace} onChange={(e) => setEnlace(e.target.value)} />
                    </div>
                    <div>
                        <label>Despliegue</label>
                        <input placeholder="Ingrese url" type="text" value={despliegue} onChange={(e) => setDespliegue(e.target.value)} />
                    </div>
                    <div className='form2Buttons'>
                        <button className='formButton' type="submit"><i className="fa-regular fa-floppy-disk"></i>Guardar proyecto</button>
                        <button className='formButton' type="button" onClick={goBack}><i className="fa-solid fa-xmark"></i>Cancelar</button>
                    </div>
                </div >
            </form >
        </div>

    )
}

export default SavePortfolio;
