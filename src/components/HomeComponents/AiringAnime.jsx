import { Link } from "react-router-dom"

const AiringAnime = () => {
    return <>
        <div className="anime-list-name">
            <h3>Top Airing Anime</h3><Link to="list/top/airing">See More...</Link>
        </div>
        <hr />
        <div className="anime-list-container">
            {/* {loading ?
                    <h1>Loading...</h1> :
                    error ?
                        <h1>{error}</h1> :
                        anime.map(animeData => <Anime key={animeData.mal_id} animeData={animeData} />)
                 */}
        </div>
    </>
}

export default AiringAnime
