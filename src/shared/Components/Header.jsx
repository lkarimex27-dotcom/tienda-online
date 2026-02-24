import { Link } from "react-router-dom"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-5">
        <Link className="navbar-brand" to="/">
        Click Connection
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">
            Inicio
          </Link>

          <Link className="nav-link" to="/props">
            Props
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header