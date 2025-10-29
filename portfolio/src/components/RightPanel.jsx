import '../styles/layout.css'
import ubicacion from '../assets/ubicacion.png'
import contacto from '../assets/Contacto ICON.png'
import cvIcon from '../assets/cv.png'
import educacion from '../assets/Educacion ICON.png'
import home from '../assets/Home ICON.png'
import experiencia from '../assets/Experiencia ICON.png'
import about from '../assets/Quien soy ICON.png'
import proyectos from '../assets/Proyectos ICON.png'

const RightPanel = () => {
  return (
    <div className="right-panel">
      {/* Bloque unificado */}
      <div className="right-block">
        <nav className="menu">
          <ul>
            <li className="active">
              <img src={home} alt="Home" className="menu-icon left" />
              HOME
            </li>
            <li className="right-icon">
              ABOUT
              <img src={about} alt="About" className="menu-icon right" />
            </li>
            <li>
              <img src={experiencia} alt="Experience" className="menu-icon left" />
              EXPERIENCE
            </li>
            <li className="right-icon">
              EDUCATION
              <img src={educacion} alt="Education" className="menu-icon right" />
            </li>
            <li>
              <img src={proyectos} alt="Projects" className="menu-icon left" />
              PROJECTS
            </li>
            <li className="right-icon">
              CONTACT
              <img src={contacto} alt="Contact" className="menu-icon right" />
            </li>
          </ul>
        </nav>

        <button className="cv-btn">
          <img src={cvIcon} alt="Download CV" className="cv-icon" />
          Download CV
        </button>
      </div>

      {/* Ubicación separada abajo */}
      <div className="location-container">
        <img src={ubicacion} alt="Ubicación" className="ubicacion-img" />
        <p className="location">Buenos Aires, Argentina</p>
      </div>
    </div>
  )
}

export default RightPanel
