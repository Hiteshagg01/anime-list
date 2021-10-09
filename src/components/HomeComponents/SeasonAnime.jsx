import { Link } from "react-router-dom"

// Redux
import { useSelector } from "react-redux"

// Components
import Anime from '../Anime'

const SeasonAnime = () => {

    const date = new Date()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    var season = ''

    if (0 < month && month < 4) {
        season = 'winter'
    } else if (3 < month && month < 7) {
        season = 'spring'
    } else if (6 < month && month < 10) {
        season = 'summer'
    } else if (9 < month && month <= 13) {
        season = 'fall'
    }

    const { loading, anime, error } = useSelector(state => state.seasonAnime)

    return <>
        <div className="anime-list-name">
            <h3>{`${season[0].toUpperCase()}${season.substring(1)} ${year} Anime`}</h3><Link to={`season/${year}/${season}`}>See More...</Link>
        </div>
        <hr />
        <div className="anime-list-container">
            {
                loading ?
                    <h1>Loading...</h1> :
                    error ?
                        <h1>{error}</h1> :
                        anime.map(animeData => !animeData.r18 && <Anime key={animeData.mal_id} animeData={animeData} />)
            }
        </div>
    </>
}

export default SeasonAnime
