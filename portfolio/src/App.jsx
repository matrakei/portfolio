import './styles/globals.css'
import './styles/layout.css'
import LeftPanel from './components/LeftPanel.jsx'
import CenterPanel from './components/CenterPanel.jsx'
import RightPanel from './components/RightPanel.jsx'

export default function App() {
  return (
    <div className="app-layout">
      <LeftPanel />
      <CenterPanel />
      <RightPanel />
    </div>
  )
}
