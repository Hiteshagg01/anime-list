import './HomeScreen.css'

// Components
import SeasonAnime from '../components/HomeComponents/SeasonAnime'
import AiringAnime from '../components/HomeComponents/AiringAnime'
import UpcomingAnime from '../components/HomeComponents/UpcomingAnime'
import PopularAnime from '../components/HomeComponents/PopularAnime'


const HomeScreen = () => {

    // const dispatch = useDispatch()

    // const { loading, anime, error } = useSelector(state => state.getAnime)

    // useEffect(() => {
    //     dispatch(getAnime('season', season))
    // }, [dispatch, season])

    return <>

        <div className="welcome-title">
            <h3>Welcome to Anime List</h3>
        </div>

        <div className="homescreen">

            <SeasonAnime />
            <br />
            <AiringAnime />
            <br />
            <PopularAnime />
            <br />
            <UpcomingAnime />

        </div>
    </>
}

export default HomeScreen
