import './Anime.css'
import { Link } from 'react-router-dom'

const Anime = () => {
    return (
        <Link to="/anime/:name">
            <div className="anime-container">
                <img src="https://cdn.myanimelist.net/images/anime/1301/93586.jpg?s=f19bb396363ae0caf8f1e1e8c17b49ac" alt="bunny girl senpai" />
                <p>Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai</p>
            </div>
        </Link>
    )
}

export default Anime
