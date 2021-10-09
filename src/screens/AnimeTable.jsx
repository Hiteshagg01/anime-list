import { Link } from 'react-router-dom'

// Redux
import { useSelector } from 'react-redux';

import './AnimeTable.css'


const AnimeTable = ({ match }) => {

    const { loading, anime, error } = useSelector(state =>
        match.params.type === '2021' ?
            state.seasonAnime :
            match.params.subtype === 'airing' ?
                state.topAiring :
                match.params.subtype === 'bypopularity' ?
                    state.topPopular :
                    match.params.subtype === 'upcoming' ?
                        state.topUpcoming :
                        match.path === '/search/:name' ?
                            state.search : null
    )

    return (
        <div className="animetable">
            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th style={{ width: "5%" }}>Rank</th>
                        <th style={{ width: "80%" }}>Title</th>
                        <th style={{ width: "7%" }}>Score</th>
                        <th style={{ width: "8%" }}>Genres</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? <tr><td><h1>Loading...</h1></td></tr> :
                            error ? <tr><td><h1>{error}</h1></td></tr> :
                                anime.map((animedata, index) => !animedata.r18 &&
                                    <tr key={animedata.mal_id} >
                                        <td>
                                            {++index}
                                        </td>
                                        <td>
                                            <div className="anime-detail">
                                                <img src={animedata.image_url} heigh="auto" width="12%" alt={animedata.title} />
                                                <div>
                                                    <Link to={`/anime/${animedata.mal_id}/${animedata.title}`}>
                                                        <h4>{animedata.title}</h4>
                                                    </Link>
                                                    <p>Type: {animedata.type || 'N/A'} </p>
                                                    <p>Episodes: {animedata.episodes || 'N/A'}</p>
                                                    <p>Source: {animedata.source}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <i className="fas fa-star"></i> {animedata.score ? animedata.score : 'N/A'}
                                        </td>
                                        <td>
                                            {animedata.genres ? animedata.genres.map(genre => genre.name + ', ') : 'N/A'}
                                        </td>
                                    </tr>
                                )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AnimeTable
