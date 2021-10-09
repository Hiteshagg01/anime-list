import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

// Components
import Anime from "../Anime"

const UpcomingAnime = () => {

    const { loading, anime, error } = useSelector(state => state.topUpcoming)

    return <>
        <div className="anime-list-name">
            <h3>Top Upcoming Anime</h3><Link to="/top/anime/upcoming">See More...</Link>
        </div>
        <hr />
        <div className="anime-list-container">
            {loading ?
                <h1>Loading...</h1> :
                error ?
                    <h1>{error}</h1> :
                    anime.map(animeData => <Anime key={animeData.mal_id} animeData={animeData} />)
            }
        </div>
    </>
}

export default UpcomingAnime
