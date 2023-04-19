// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <ul className="list">
      <li>
        <Link to="/" className="list-item">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="list-item">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
