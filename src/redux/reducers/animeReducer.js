import * as animeActions from '../constants/animeActionTypes'

const animeReducer = (state = { loading: true, animeData: {} }, action) => {
    switch (action.type) {
        case animeActions.GET_ANIMEDATA_REQ:
            return state

        case animeActions.GET_ANIMEDATA_SUCCESS:
            return {
                ...state,
                loading: false,
                animeData: action.payload
            }

        case animeActions.GET_ANIMEDATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export default animeReducer
