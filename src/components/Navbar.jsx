import './Navbar.css'
import { Link } from 'react-router-dom'

// Components
import Search from './Search'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <span>Anime List</span>
            </div>
            <Search />
            <ul className="nav-links">
                <li><Link to="/">
                    Home
                </Link></li>
                <li><Link to="/about">
                    About
                </Link></li>
            </ul>
            <div className="search-menu">
                <i className="fas fa-search icon"></i>
            </div>
            <div className="burger-menu">
                <div className="burger-menu-line-1"></div>
                <div className="burger-menu-line-2"></div>
                <div className="burger-menu-line-3"></div>
            </div>
        </nav>
    )
}

export default Navbar
