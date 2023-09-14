import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const url = "http://localhost:8080/api/portfolio"

const SavePortfolio = () => {

    const [nombre, setNombre] = useState('')
    const [img, setImg] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [lenguaje, setLenguaje] = useState('')
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
            <div className="form">
                <h2>Crear un elemento</h2>
                <form onSubmit={store}>
                    <div>
                        <label>Nombre</label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div>
                        <label>Descripcion</label>
                        <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                    </div>
                    <div>
                        <label>Imagen</label>
                        <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
                    </div>
                    <div>
                        <label>Lenguajes</label>
                        <input type="text" value={lenguaje} onChange={(e) => setLenguaje(e.target.value)} />
                    </div>
                    <div>
                        <label>Enlace a GitHub</label>
                        <input type="text" value={enlace} onChange={(e) => setEnlace(e.target.value)} />
                    </div>
                    <div>
                        <label>Despliegue</label>
                        <input type="text" value={despliegue} onChange={(e) => setDespliegue(e.target.value)} />
                    </div>
                    <button type="submit">Guardar proyecto</button>
                    <button type="button" onClick={goBack}>Cancelar</button>
                </form>
            </div>
        </>

    )
}

export default SavePortfolio