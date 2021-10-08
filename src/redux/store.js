import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import animeReducer from './animeReducer'


const animeApp = combineReducers({
    getAnime: animeReducer
})

const store = createStore(
    animeApp,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store