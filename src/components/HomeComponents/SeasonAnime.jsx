import { Link } from "react-router-dom"


const SeasonAnime = () => {

    const date = new Date()
    const month = date.getMonth() + 1

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

    return <>
        <div className="anime-list-name">
            <h3>Fall 2021 Anime</h3><Link to={`list/season/${season}`}>See More...</Link>
        </div>
        <hr />
        <div className="anime-list-container">
            {/*loading ?
                <h1>Loading...</h1> :
                error ?
                    <h1>{error}</h1> :
                    anime.map(animeData => <Anime key={animeData.mal_id} animeData={animeData} />)
            */}
        </div>
    </>
}

export default SeasonAnime
