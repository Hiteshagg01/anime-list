import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

// Components
import Anime from "../Anime"

const PopularAnime = () => {

    const { loading, anime, error } = useSelector(state => state.topPopular)

    return <>
        <div className="anime-list-name">
            <h3>Most Popular Anime</h3><Link to="/top/anime/bypopularity">See More...</Link>
        </div>
        <hr />
        <div className="anime-list-container">
            {loading ?
                <h1>Loading...</h1> :
                error ?
                    <h1>{error}</h1> :
                    anime.map(animeData => !animeData.r18 && <Anime key={animeData.mal_id} animeData={animeData} />)
            }
        </div>
    </>
}

export default PopularAnime
