import axios from "axios";
import * as animeActions from '../constants/seasonActionTypes'

const seasonAction = (year, season) => async (dispatch) => {
    try {
        dispatch({ type: animeActions.GET_ANIMESEASON_REQ })

        const { data } = await axios.get(`https://api.jikan.moe/v3/season/${year}/${season}`)

        dispatch({
            type: animeActions.GET_ANIMESEASON_SUCCESS,
            payload: data.anime
        })
    } catch (error) {
        dispatch({
            type: animeActions.GET_ANIMESEASON_FAIL,
            payload: 'Failed to get data'
        })
    }
}

export default seasonAction
