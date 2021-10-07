import './HomeScreen.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Screens
import Anime from '../components/Anime'

const HomeScreen = () => {

    // const [seasonAnime, setSeasonAnime] = useState({
    //     loaded: false,
    //     animes: []
    // })

    // useEffect(() => {
    //     fetch('https://api.jikan.moe/v3/season/2021/fall')
    //         .then(res => res.json())
    //         .then(result => setSeasonAnime({
    //             loaded: true,
    //             animes: result.anime
    //         }))
    // }, [])

    // console.log(seasonAnime);

    return <>
        <div className="welcome-title">
            <h3>Welcome to Anime List</h3>
        </div>
        <div className="homescreen">
            <div className="anime-list-name">
                <h3>Fall 2021 Anime</h3><Link to="animes/season">See More...</Link>
            </div>
            <hr />
            <div className="anime-list-container">
                <Anime />
                <Anime />
                <Anime />
                <Anime />
                <Anime />
                <Anime />
                <br />
            </div>
            <div className="anime-list-name">
                <h3>Top Airing Anime</h3><Link to="animes/top/airing">See More...</Link>
            </div>
            <hr />
            <div className="anime-list-container">
                <Anime />
                <Anime />
                <Anime />
                <Anime />
                <Anime />
                <Anime />
                <br />
            </div>
            <div className="anime-list-name">
                <h3>Top Upcoming Anime</h3><Link to="animes/top/upcoming">See More...</Link>
            </div>
            <hr />
            <div className="anime-list-container">
                <Anime />
                <Anime />
                <Anime />
                <Anime />
                <Anime />
                <Anime />
                <br />
            </div>
            <div className="anime-list-name">
                <h3>Most Popular Anime</h3><Link to="animes/top/popularity">See More...</Link>
            </div>
            <hr />
            <div className="anime-list-container">
                <Anime />
                <Anime />
                <Anime />
                <Anime />
                <Anime />
                <Anime />
                <br />
            </div>
        </div>
    </>
}

export default HomeScreen
