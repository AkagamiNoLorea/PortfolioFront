import React from 'react'
import './Skills.css'
/*import CVAidaHerraiz from '../assets/CVAidaHerraiz.pdf'*/

const Skills = () => {
  return (
    <>
    
      <div className='soft-skills'>
        {/*<button className='cvButton'>
                        <a href={CVAidaHerraiz} download="CVAidaHerraiz" target='_blank'>
                          <span className="button-invisible">Descarga mi curriculum{'\n'}</span>
  <i className="fa-solid fa-exclamation"></i></a></button>*/}
        <div>
          <h2>Dando lo Mejor de Mí: Un Desarrollador Único</h2>
          <p>
            Cada uno de nosotros trae consigo una combinación única de habilidades, experiencias y perspectivas. En mi camino como desarrollador web, he aprendido a apreciar y celebrar esta diversidad.
          </p>
          <p>
            Si hay algo que me enorgullece, es mi dedicación a dar siempre lo mejor de mí en cada proyecto. Cada línea de código, cada diseño y cada interacción están impregnados con mi pasión y compromiso por crear soluciones excepcionales.
          </p>
          <p>
            Entiendo que cada uno de nosotros tiene su propio estilo de trabajo y enfoque, y es esta diversidad lo que enriquece nuestros equipos y proyectos. Estoy emocionado de compartir mis soft skills, que complementan mi dedicación, para colaborar y crear experiencias web inolvidables.
          </p>
          <div className='soft-skills-graphics'>
          <h1>Soft Skills</h1>
    <div class="skills-container">
    <div class="circular-progress"></div>
      <div class="circular-progress"></div>
      <div class="circular-progress"></div>
      <div class="circular-progress"></div>
      <div class="circular-progress"></div>
      <div class="circular-progress"></div>
      <div class="circular-progress"></div>
      <div class="circular-progress"></div>
      <div class="circular-progress"></div>
      <div class="circular-progress"></div>
      <div class="circular-progress"></div>
      <div class="circular-progress"></div>
      <div class="circular-progress"></div>
      <div class="circular-progress"></div>
      <div class="circular-progress"></div>
    </div>
          </div>
        </div>
      </div>
      <div className='hard-skills'>
        <h2>Competencias Técnicas</h2>
        <p>Poseo habilidades integrales como desarrollador Fullstack, con un conocimiento sólido tanto en Front-end como Back-end. <br />
          Sin embargo, he encontrado una inclinación natural y una destreza particular en el ámbito del Front-end, donde encuentro una mayor realización y fluidez en mi trabajo.
        </p>
        <div className='img-graphichard'>
          <div>Front-End</div><div>Fullstack<br/>Developer</div><div>Back-End</div>
        </div>
      </div>
    </>
  )
}

export default Skills
