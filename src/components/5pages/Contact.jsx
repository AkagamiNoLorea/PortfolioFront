import React from 'react'
import'./Contact.css'

const Contact = () => {
  return (
    <section className='contact'>
    <h1 className='titleContact'>¡Hablemos!</h1>
    <div className='gridContact'>
    <p>Estoy emocionada de escuchar tus ideas y colaborar en proyectos interesantes. Si tienes alguna pregunta, sugerencia o simplemente quieres saludar, no dudes en ponerte en contacto conmigo.</p>
    <ul className='contactList'>
            <li><a href="https://www.linkedin.com/in/aidahc/" target='_blank'><i className="fa-brands fa-linkedin" ></i><span>Linkedin</span></a></li>
            <li><a href="https://github.com/AkagamiNoLorea" target='_blank'><i className="fa-brands fa-github" ></i><span>Github</span></a></li>
            <li><a href="mailto:herraiz_1992@hotmail.com" target='_blank'><i className="fa-regular fa-envelope" ></i><span>Email</span></a></li>
            <li><a href="https://t.me/akagaminolorea" target='_blank'><i className="fa-brands fa-telegram"></i><span>Telegram</span></a></li> 
         </ul>
         </div>
    </section>
  )
}

export default Contact