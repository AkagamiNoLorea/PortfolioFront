
import realportrait from '../../assets/BWProfileRealReady.png'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <>
      <div className='welcome'>Buenas!</div>
      <div className='grid-aboutme'>
        <div className='aboutme'>¡Hola a todos! Soy Aida, y como Full Stack Developer, me gusta construir mundos digitales coloridos como una bolsa de golosinas y llenos de desafíos tan emocionantes como el nivel final de un videojuego.

          Cuando no estoy inmerso en código, estoy explorando nuevos niveles y desafíos en el mundo de los videojuegos. Desde los clásicos retro hasta los últimos títulos, me encanta sumergirme en historias épicas y resolver puzles intrigantes.

          Además de los videojuegos, tengo una debilidad irremediable por los dulces. No hay problema que una buena barra de chocolate o una bolsa de gominolas no pueda resolver. ¡Siempre estoy en busca de los mejores sabores y combinaciones!

          Como Full Stack Developer, no solo construyo aplicaciones, sino que también creo experiencias que cautivan a los usuarios. Desde el diseño de la interfaz de usuario hasta la funcionalidad del back-end, me encanta cada etapa del proceso de desarrollo.

          Si compartes alguna de mis pasiones, ¡o simplemente quieres charlar sobre tecnología, dulces, videojuegos u algún otro tema, estaré encantado de conocerte.
          </div>
          <div className='imgaboutme'>
          <img className="realportrait" src={realportrait} alt="Retrato real" />
          </div>
      </div>
    

    </>
  )
}

export default AboutMe