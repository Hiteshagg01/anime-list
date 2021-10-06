import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Screens
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import AnimeScreen from './screens/AnimeScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/about' component={AboutScreen} />
        <Route exact path='/anime' component={AnimeScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
