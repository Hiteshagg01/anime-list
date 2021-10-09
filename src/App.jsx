import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { topAiringAction, topPopularAction, topUpcomingAction } from './redux/actions/topAnimeAction'
import seasonAction from "./redux/actions/seasonAction"

// Components
import Navbar from './components/Navbar';

// Screens
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import AnimeTable from './screens/AnimeTable';
import AnimeScreen from './screens/AnimeScreen';


const App = () => {

  const date = new Date()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  var season = ''

  if (0 < month && month < 4) {
    season = 'winter'
  } else if (3 < month && month < 7) {
    season = 'spring'
  } else if (6 < month && month < 10) {
    season = 'summer'
  } else if (9 < month && month <= 13) {
    season = 'fall'
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(seasonAction(year, season))
    dispatch(topAiringAction())
    dispatch(topPopularAction())
    dispatch(topUpcomingAction())

  }, [dispatch, year, season])

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/about' component={AboutScreen} />
        <Route exact path='/season/:type/:subtype' component={AnimeTable} />
        <Route exact path='/top/:type/:subtype' component={AnimeTable} />
        <Route exact path='/anime/:id/:name' component={AnimeScreen} />
        <Route exact path='/search/:name' component={AnimeTable} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
