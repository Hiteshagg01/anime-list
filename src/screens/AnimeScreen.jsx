import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import animeAction from '../redux/actions/animeAction';
import './AnimeScreen.css'

const AnimeScreen = ({ match }) => {

    const dispatch = useDispatch()

    const { loading, animeData, error } = useSelector(state => state.specificAnime)

    useEffect(() => {
        dispatch(animeAction(match.params.id))
    }, [dispatch, match.params.id])


    return (
        <div className="animescreen" key={animeData.mal_id}>
            {loading ?
                <h1>Loading...</h1> :
                error ?
                    <h1>{error}</h1> :
                    <>
                        <div className="anime-title" key={animeData.mal_id}>
                            <h4>{animeData.title}</h4>
                            <p>{animeData.title_english}</p>
                        </div>

                        <div className="anime-about">
                            <div className="left-side-content">
                                <img src={animeData.image_url} alt={animeData.title} />
                                <div className="information">
                                    <strong>Information</strong>
                                    <hr />
                                    <p>
                                        <strong>Type: </strong>
                                        {animeData.type}
                                    </p>
                                    <p>
                                        <strong>Episodes: </strong>
                                        {animeData.episodes || 'N/A'}
                                    </p>
                                    <p>
                                        <strong>Status: </strong>
                                        {animeData.status || 'N/A'}
                                    </p>
                                    <p>
                                        <strong>Aired: </strong>
                                        {animeData.aired.string ? animeData.aired.string : 'N/A'}
                                    </p>
                                    <p>
                                        <strong>Premiered: </strong>
                                        {animeData.premiered || 'N/A'}
                                    </p>
                                    <p>
                                        <strong>Studios: </strong>
                                        {animeData.studios.map(studio => studio.name + ', ')}
                                    </p>
                                    <p>
                                        <strong>Genres: </strong>
                                        {animeData.genres.map(genre => genre.name + ', ')}
                                    </p>
                                    <p>
                                        <strong>Source: </strong>
                                        {animeData.source || 'N/A'}
                                    </p>
                                </div>
                            </div>

                            <hr />

                            <div className="right-side-content">
                                <div className="statistics-and-trailer">
                                    <div className="statistics">
                                        <p>
                                            <span>SCORE</span>
                                            <br />
                                            <strong>{animeData.score || 'N/A'}</strong>
                                        </p>
                                        <p>Ranked
                                            <br />
                                            <strong>#{animeData.rank ? animeData.rank.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 'N/A'}</strong>
                                        </p>
                                        <p>Popularity
                                            <br />
                                            <strong>#{animeData.popularity ? animeData.popularity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 'N/A'}</strong>
                                        </p>
                                        <p>Members
                                            <br />
                                            <strong>{animeData.members ? animeData.members.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 'N/A'}</strong>
                                        </p>
                                    </div>
                                    <div>
                                        <iframe src={animeData.trailer_url} width="400" height="225" frameBorder="0" title="Trailer" />
                                    </div>
                                </div>

                                <br />

                                <strong>Synopsis: </strong>
                                <hr />
                                <p>
                                    {animeData.synopsis || 'No Data Availabe'}
                                </p>

                                <br />

                                <strong>Opening Theme:</strong>
                                <hr />
                                {animeData.opening_themes.map(op => <p>{op}</p>)}

                                <br />

                                <strong>Ending Theme:</strong>
                                <hr />
                                {animeData.ending_themes.map(outro => <p>{outro}</p>)}
                            </div>
                        </div>
                    </>}
        </div>
    )
}

export default AnimeScreen
