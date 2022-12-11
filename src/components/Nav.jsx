import { Link, useLocation } from 'react-router-dom'
import './styles/Nav.css'


const Nav = () => {
  const location = useLocation()

  return (
    <nav className="nav">
      <div className="container">
        <div className={`nav-item${location.pathname === '/publications' ? ' active' : ''}`}>
          <Link to="/publications">PUBLICATIONS</Link>
        </div>
        <div className={`nav-item${location.pathname === '/teaching' ? ' active' : ''}`}>
          <Link to="/teaching">TEACHING</Link>
        </div>
        <div className={`nav-item${location.pathname === '/honors' ? ' active' : ''}`}>
          <Link to="/honors">HONORS</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav