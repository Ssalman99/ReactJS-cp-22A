// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="line-order">
    <div className="img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave"
      />
      <p className="pera">Wave</p>
    </div>

    <ul className="nav-menu">
      <li>
        <Link className="pera" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="pera" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="pera" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
