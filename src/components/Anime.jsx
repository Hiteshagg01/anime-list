import './Anime.css'
import { Link } from 'react-router-dom'

const Anime = ({ animeData }) => {
    return (
        <Link to={`/anime/${animeData.mal_id}/${animeData.title}`}>
            <div className="anime-container">
                <img src={animeData.image_url} alt="bunny girl senpai" />
                <p>{animeData.title}</p>
            </div>
        </Link>
    )
}

export default Anime
