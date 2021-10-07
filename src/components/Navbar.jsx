import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    const [searchAnime, setSearchAnime] = useState("")

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <span>Anime List</span>
            </div>
            <form className="nav-search" typeof="submit">
                <input type="text" placeholder="Search Anime" value={searchAnime} onChange={(e) => setSearchAnime(e.target.value)} />
                <button onClick={() => console.log(searchAnime)}>
                    <i className="fas fa-search icon"></i>
                </button>
            </form>
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
