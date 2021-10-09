import axios from "axios";
import * as animeActions from '../constants/animeActionTypes'

const animeAction = (mal_id) => async (dispatch) => {
    try {
        dispatch({ type: animeActions.GET_ANIMEDATA_REQ })

        const { data } = await axios.get(`https://api.jikan.moe/v3/anime/${mal_id}`)

        dispatch({
            type: animeActions.GET_ANIMEDATA_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: animeActions.GET_ANIMEDATA_FAIL,
            error
        })
    }
}

export default animeAction
