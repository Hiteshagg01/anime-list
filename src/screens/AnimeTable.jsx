import { Link } from 'react-router-dom'
import './AnimeTable.css'


const AnimeTable = ({ match }) => {
    console.log(match);

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
                    <tr>
                        <td>
                            1
                        </td>
                        <td className="anime-detail">
                            <img src="https://cdn.myanimelist.net/images/anime/1301/93586.jpg?s=f19bb396363ae0caf8f1e1e8c17b49ac" heigh="auto" width="10%" alt="bunny girl" />
                            <div>
                                <Link to="/anime/37450/Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai">
                                    <h4>Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai</h4>
                                </Link>
                                <p>Type: TV</p>
                                <p>Episodes: 13</p>
                                <p>Status: Finished airing</p>
                            </div>
                        </td>
                        <td>
                            <i className="fas fa-star"></i> 8.31
                        </td>
                        <td>
                            Action
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AnimeTable
