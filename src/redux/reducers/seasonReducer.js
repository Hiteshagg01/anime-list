import * as animeActions from '../constants/seasonActionTypes'

const seasonReducer = (state = { loading: true, anime: [] }, action) => {
    switch (action.type) {
        case animeActions.GET_ANIMESEASON_REQ:
            return state

        case animeActions.GET_ANIMESEASON_SUCCESS:
            return {
                ...state,
                loading: false,
                anime: action.payload
            }

        case animeActions.GET_ANIMESEASON_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export default seasonReducer
