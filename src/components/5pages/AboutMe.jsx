
import realportrait from '../../assets/BWProfileRealReady.png'
import './AboutMe.css'
import ninya from '../../assets/ninya.png'
import chocobo from '../../assets/chocobo.png'

const AboutMe = () => {
  return (
    <>
      <div className='welcome'>Buenas!</div>
      <div className='grid-aboutme'>
        <div className='imgaboutme'>
          <img className="realportrait" src={realportrait} alt="Retrato real" />
        </div>
        <div className='aboutme'>¡Hola a todos! Soy Aida, y como Full Stack Developer, me gusta construir mundos digitales visualmente placenteros y con desafíos para mis capacidades. <br />
          Cuando no estoy inmerso en el código, me encontrarás explorando mundos virtuales y enfrentándome a desafíos épicos en los videojuegos.<br />
          Además, tengo una debilidad irremediable por los dulces. ¿Chocolate o gominolas? ¡Estoy listo para ambos!<br />
          Si buscas a alguien que mezcle creatividad, código y un poco de diversión, ¡aquí estoy! Estoy emocionado por construir experiencias digitales emocionantes.<br />
          Como Full Stack Developer, no solo construyo aplicaciones, sino que también creo experiencias que cautivan a los usuarios. Desde el diseño de la interfaz de usuario hasta la funcionalidad del back-end, me encanta cada etapa del proceso de desarrollo.<br />
          Si compartes alguna de mis pasiones, ¡o simplemente quieres charlar sobre tecnología, dulces, videojuegos u algún otro tema, estaré encantado de conocerte.
        </div>
      </div>
      <div className='history'>
        <div className='title-history'>¿Y de donde vengo?</div>
        <div className='grid-history'>
          <div><p>Desde niña, la tecnología me fascinaba y soñaba con casas automatizadas.<br />
            Al crecer, exploré la robótica, maravillándome con su potencial. Sin embargo, todo cambió con mi primer encuentro con la programación, especialmente en C++.<br />
            Esta habilidad de dar vida a máquinas me cautivó. Posteriormente he descubierto mi gran amor: el desarrollo web, un espacio para mi creatividad y deseo de construir experiencias únicas.<br />
            Cada línea de código es una oportunidad para crear algo especial y marcar la diferencia en la experiencia digital.<br />
            Mi viaje en el mundo de la tecnología y la programación ha sido una montaña rusa de descubrimientos, desafíos y logros. Y cada día, sigo emocionada por lo que el futuro tiene reservado para mí en este apasionante camino que he elegido.
          </p></div>
          <div>
            <img className="imgninya" src={ninya} alt="niña" />
          </div>
        </div>
      </div>
      <div className='random'>
        <div className='title-random'>Datos aleatorios o divertidos sobre mi</div>
        <div className='grid-random'>
          <div className='ul1'>
            <ul>
              <li>Friki de los videojuegos</li>
              <li>Amante de la tinta</li>
              <li>No bebo café</li>
            </ul>
          </div>
          <div className='mytatoo'>
            <img className="imgchocobo" src={chocobo} alt="niña" />
          </div>
          <div className='ul2'>
            <ul>
              <li>Nakama hasta la médula</li>
              <li>Fan de los perros</li>
              <li>Colecciono dados de rol</li>
            </ul>
          </div>
        </div>
      </div>


    </>
  )
}

export default AboutMe