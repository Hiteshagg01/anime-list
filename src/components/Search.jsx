import { useState } from "react"
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux"
import searchAction from "../redux/actions/searchAction"



const Search = () => {
    const [searchAnime, setSearchAnime] = useState("")
    const history = useHistory()
    const dispatch = useDispatch()

    const onClickHandler = () => {

        dispatch(searchAction(searchAnime))

        history.push(`/search/${searchAnime}`)
        setSearchAnime('')
    }
    return (
        <div className="nav-search">
            <input type="text" placeholder="Search Anime" value={searchAnime} onChange={(e) => setSearchAnime(e.target.value)} />
            <button onClick={onClickHandler}>
                <i className="fas fa-search icon"></i>
            </button>
        </div>
    )
}

export default Search
