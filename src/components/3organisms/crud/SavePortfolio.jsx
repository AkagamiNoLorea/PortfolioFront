import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './FormsPortfolio.css'

const url = "http://localhost:8080/api/portfolio"

const SavePortfolio = () => {

    const [nombre, setNombre] = useState('')
    const [img, setImg] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [htemlValue, setHtemlValue] = useState('')
    const [cssValue, setCssValue] = useState('')
    const [jsValue, setJsValue] = useState('')
    const [javaValue, setJavaValue] = useState('')
    const [enlace, setEnlace] = useState('')
    const [despliegue, setDespliegue] = useState('')

    const navigate = useNavigate()

    const goBack = () => {
        navigate("/");
    }
    const store = async (e) => {
        e.preventDefault()
        console.log(e)
        await axios.post(url, { nombre: nombre, descripcion: descripcion, img: img, lenguaje: lenguaje, enlace: enlace, despliegue: despliegue })
        navigate("/")
    }

    return (
        <>
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
                        <div className='formGrid'>
                            <div className='formGridPart'>
                                <label>HTML</label>
                                <input placeholder="Ingrese solo valor numerico" type="text" value={htemlValue} onChange={(e) => setHtemlValue(e.target.value)} />
                                <label>CSS</label>
                                <input placeholder="Ingrese solo valor numerico" type="text" value={cssValue} onChange={(e) => setCssValue(e.target.value)} />
                            </div>
                            <div className='formGridPart'>
                                <label>Javascript</label>
                                <input placeholder="Ingrese solo valor numerico" type="text" value={jsValue} onChange={(e) => setJsValue(e.target.value)} />
                                <label>Java</label>
                                <input placeholder="Ingrese solo valor numerico" type="text" value={javaValue} onChange={(e) => setJavaValue(e.target.value)} />
                            </div>
                        </div>
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
                        <button className='formButton' type="submit">Guardar proyecto</button>
                        <button className='formButton' type="button" onClick={goBack}>Cancelar</button>
                    </div>
                </div >
            </form >
        </>

    )
}

export default SavePortfolio;