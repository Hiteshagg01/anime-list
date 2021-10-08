import axios from 'axios'
import * as animeActions from './animeActionTypes'


const getAnime = (type, subType) => async (dispatch) => {
    try {
        dispatch({ type: animeActions.GET_ANIMELIST_REQ })
        const { data } = await axios.get(`https://api.jikan.moe/v3/${type}/2021/${subType}`)

        dispatch({
            type: animeActions.GET_ANIMELIST_SUCCESS,
            payload: data.anime
        })
    } catch (error) {
        dispatch({
            type: animeActions.GET_ANIMELIST_FAIL,
            payload: 'error'
        })
    }
}

export default getAnime
