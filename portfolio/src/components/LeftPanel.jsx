import '../styles/layout.css'
import python from '../assets/python.png'
import unity from '../assets/unity.png'
import C from '../assets/C.png'
import fastapi from '../assets/FastAPI.png'
import idiomas from '../assets/idiomas.png'
import mail from '../assets/gmail.png'

const LeftPanel = () => {
  return (
    <div className="left-panel">
      {/* Intro */}
      <div className="intro">
        <h1>Hola, Soy Tomás</h1>
        <h2>Soy Estudiante en ORT Montañeses</h2>
        <a href="#" className="contact-link">Contáctame →</a>
      </div>

      {/* Tecnologías */}
      <div className="tecnologias-stack">
        <h3>TECNOLOGÍAS</h3>
        <div className="tecnologias-icons">
          <div className="tech-card"><img src={python} alt="Python" /></div>
          <div className="tech-card"><img src={unity} alt="Unity" /></div>
          <div className="tech-card"><img src={C} alt="C" /></div>
          <div className="tech-card"><img src={fastapi} alt="FastAPI" /></div>
        </div>
      </div>

      {/* Idiomas */}
      <div className="idiomas-block">
        <div className="idiomas-left">
          <button className="idioma-btn active">Español</button>
          <div className="idioma-icon">
            <img src={idiomas} alt="Icono idiomas" />
          </div>
          <button className="idioma-btn">English</button>
        </div>
      </div>

      {/* Email */}
      <div className="mail-block">
        <img src={mail} alt="Mail" className="mail-icon" />
        <p className="email">tomashauser2007@gmail.com</p>
      </div>
    </div>
  )
}

export default LeftPanel
