import './styles/Nav.css'


const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-item">
          <a href="#publication">Publications</a>
        </div>
        <div className="nav-item">
          <a href="#teaching">Teaching</a>
        </div>
        <div className="nav-item">
          <a href="#honors">Honors</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav