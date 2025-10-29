import '../styles/layout.css'
import python from '../assets/python.png'
import unity from '../assets/unity.png'
import C from '../assets/C.png'
import fastapi from '../assets/FastAPI.png'

const LeftPanel = () => {
  return (
    <div className="left-panel">
      {/* Intro */}
      <div className="intro">
        <h1>Hola, Soy Tomás</h1>
        <h2>Soy Estudiante en ORT Montañeses</h2>
        <a href="#" className="contact-link">Contáctame →</a>
      </div>

      {/* Tecnologías (fuera del bloque de intro) */}
      <div className="tecnologias-stack">
        <h3>TECNOLOGÍAS</h3>
        <div className="tecnologias-icons">
          <div className="tech-card"><img src={python} alt="Python" /></div>
          <div className="tech-card"><img src={unity} alt="Unity" /></div>
          <div className="tech-card"><img src={C} alt="C" /></div>
          <div className="tech-card"><img src={fastapi} alt="FastAPI" /></div>
        </div>
      </div>

      {/* Idiomas y mail */}
      <div className="bottom-info">
        <div className="languages">
          <span>English</span> | <span>Spanish</span>
        </div>
        <p className="email">tomashauser2007@gmail.com</p>
      </div>
    </div>
  )
}

export default LeftPanel
