import * as animeActions from './animeActionTypes'

export default function animeReducer(state = { loading: true, anime: [] }, action) {
    switch (action.type) {
        case animeActions.GET_ANIMELIST_REQ:
            return state

        case animeActions.GET_ANIMELIST_SUCCESS:
            return {
                loading: false,
                anime: action.payload
            }

        case animeActions.GET_ANIMELIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}