import '../styles/layout.css'
import ubicacion from '../assets/ubicacion.png'

const RightPanel = () => {
  return (
    <div className="right-panel">
      <nav className="menu">
        <ul>
          <li className="active">HOME</li>
          <li>ABOUT</li>
          <li>EXPERIENCE</li>
          <li>EDUCATION</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </nav>

      <button className="cv-btn">Download CV</button>

      <div className="location-container">
        <img src={ubicacion} alt="Ubicación" className="ubicacion-img" />
        <p className="location">Buenos Aires, Argentina</p>
      </div>
    </div>
  )
}

export default RightPanel
