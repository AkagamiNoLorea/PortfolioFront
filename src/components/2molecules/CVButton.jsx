import './CVButton.css'
import CVAidaHerraiz from '../assets/CVAidaHerraiz.pdf'

const CVButton = () => {
  return (
    <>
    <a href={CVAidaHerraiz} download="CVAidaHerraiz" target='_blank'>
   <button className='download-button'>Descargar mi curriculum</button></a>
    </>
  )
}

export default CVButton
