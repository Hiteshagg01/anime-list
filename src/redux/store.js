import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Reducer
import seasonReducer from "./reducers/seasonReducer";
import animeReducer from "./reducers/animeReducer";
import { topAiringReducer, topPopularReducer, topUpcomingReducer } from "./reducers/topAnimeReducer"
import searchReducer from "./reducers/searchReducer";

const animeApp = combineReducers({
    seasonAnime: seasonReducer,
    specificAnime: animeReducer,
    topAiring: topAiringReducer,
    topUpcoming: topUpcomingReducer,
    topPopular: topPopularReducer,
    search: searchReducer
})

const store = createStore(
    animeApp,
    composeWithDevTools(applyMiddleware(thunk))

)

export default store