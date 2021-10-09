import * as searchActions from '../constants/searchActionTypes'
import axios from 'axios'

const searchAction = (searchTerm) => async (dispatch) => {
    try {
        dispatch({ type: searchActions.SEARCH_REQUEST })

        const { data } = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${searchTerm}&page=1`)

        dispatch({
            type: searchActions.SEARCH_RESULT,
            payload: data.results
        })
    } catch (error) {
        dispatch({
            type: searchActions.SEARCH_FAIL,
            error
        })
    }
}

export default searchAction
