import { Link, useLocation } from 'react-router-dom'
import "./styles/Header.css"

const Header = () => {
  const location = useLocation()

  return (
    <header>
      <div className="container">
        <div className={`name${location.pathname === '/' ? ' active' : ''}`}>
          <Link to="/">
            <span>
              AARON  LOPATIN
            </span>
          </Link>
        </div>
        <div className="description">
          <span>
            POET // TEACHER
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header