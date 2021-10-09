import * as searchActions from '../constants/searchActionTypes'

const searchReducer = (state = { loading: true, anime: [] }, action) => {
    switch (action.type) {
        case searchActions.SEARCH_REQUEST:
            return state

        case searchActions.SEARCH_RESULT:
            return {
                ...state,
                loading: false,
                anime: action.payload
            }

        case searchActions.SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export default searchReducer
