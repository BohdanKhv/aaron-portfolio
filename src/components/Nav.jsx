import { Link, useLocation } from 'react-router-dom'
import './styles/Nav.css'


const Nav = () => {
  const location = useLocation()

  return (
    <nav className="nav">
      <div className="container">
        <div className={`nav-item${location.pathname === '/publications' ? ' active' : ''}`}>
          {console.log(location)}
          <Link to="/publications">Publications</Link>
        </div>
        <div className={`nav-item${location.pathname === '/teaching' ? ' active' : ''}`}>
          <Link to="/teaching">Teaching</Link>
        </div>
        <div className={`nav-item${location.pathname === '/honors' ? ' active' : ''}`}>
          <Link to="/honors">Honors</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav