import { Link } from "react-router-dom"


const UpcomingAnime = () => {
    return <>
        <div className="anime-list-name">
            <h3>Top Upcoming Anime</h3><Link to="list/top/upcoming">See More...</Link>
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

export default UpcomingAnime
