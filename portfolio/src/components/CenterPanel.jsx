import '../styles/layout.css'
import profile from '../assets/profile.jpg'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

const CenterPanel = () => {
  return (
    <div className="center-panel">
      <img src={profile} alt="Profile" className="profile-img" />

      <div className="social-buttons">
        <a href="#" className="social-btn linkedin">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="#" className="social-btn github">
          <img src={github} alt="GitHub" />
        </a>
      </div>
    </div>
  )
}

export default CenterPanel
