import axios from "axios";
import * as animeActions from '../constants/topActionTypes';

export const topAiringAction = () => async (dispatch) => {
    try {
        dispatch({ type: animeActions.GET_TOPAIRING_REQ })

        const { data } = await axios.get('https://api.jikan.moe/v3/top/anime/1/airing')

        dispatch({
            type: animeActions.GET_TOPAIRING_SUCCESS,
            payload: data.top
        })
    } catch (error) {
        dispatch({
            type: animeActions.GET_TOPAIRING_FAIL,
            error
        })
    }
}

export const topPopularAction = () => async (dispatch) => {
    try {
        dispatch({ type: animeActions.GET_TOPPOPULAR_REQ })

        const { data } = await axios.get('https://api.jikan.moe/v3/top/anime/1/bypopularity')

        dispatch({
            type: animeActions.GET_TOPPOPULAR_SUCCESS,
            payload: data.top
        })
    } catch (error) {
        dispatch({
            type: animeActions.GET_TOPPOPULAR_FAIL,
            error
        })
    }
}
export const topUpcomingAction = () => async (dispatch) => {
    try {
        dispatch({ type: animeActions.GET_TOPUPCOMING_REQ })

        const { data } = await axios.get('https://api.jikan.moe/v3/top/anime/1/upcoming')

        dispatch({
            type: animeActions.GET_TOPUPCOMING_SUCCESS,
            payload: data.top
        })
    } catch (error) {
        dispatch({
            type: animeActions.GET_TOPUPCOMING_FAIL,
            error
        })
    }
}
