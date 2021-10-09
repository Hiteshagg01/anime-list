import * as animeActions from '../constants/topActionTypes'


export const topAiringReducer = (state = { loading: true, anime: [] }, action) => {
    switch (action.type) {
        case animeActions.GET_TOPAIRING_REQ:
            return state

        case animeActions.GET_TOPAIRING_SUCCESS:
            return {
                ...state,
                loading: false,
                anime: action.payload
            }

        case animeActions.GET_TOPAIRING_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const topUpcomingReducer = (state = { loading: true, anime: [] }, action) => {
    switch (action.type) {
        case animeActions.GET_TOPUPCOMING_REQ:
            return state

        case animeActions.GET_TOPUPCOMING_SUCCESS:
            return {
                ...state,
                loading: false,
                anime: action.payload
            }

        case animeActions.GET_TOPUPCOMING_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const topPopularReducer = (state = { loading: true, anime: [] }, action) => {
    switch (action.type) {
        case animeActions.GET_TOPPOPULAR_REQ:
            return state

        case animeActions.GET_TOPPOPULAR_SUCCESS:
            return {
                ...state,
                loading: false,
                anime: action.payload
            }

        case animeActions.GET_TOPPOPULAR_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}