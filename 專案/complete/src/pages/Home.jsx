import './Home.scss'
import {useEffect,useState} from 'react'
import MovieListItem from '../components/MovieListItem'
import { getPopularMovies,getMovieDetails } from '../api/api'
import useWatchList from '../hook/useWatchList'

const Home = () => {
  const [addMovie,removeMovie,watchList] = useWatchList()
  const [movieList,setMovieList] = useState([])
  const getPopularMovieList = async () => {
    const resp = await getPopularMovies()
    resp.slice(0,5).forEach(async(res)=>{
      const detail = await getMovieDetails(res.slice(7,-1))
      setMovieList(preState=>[...preState,detail])
    })
  }
  useEffect(()=>{
    getPopularMovieList()
  },[])
  return (
    <div className="home">
      <p className="section-title">TOP</p>
      <div className="movie-list-container">
        {movieList.length>0?movieList.map(movie=><MovieListItem  movieDetail={movie} addMovie={addMovie} removeMovie={removeMovie}/>):<></>}  
      </div>
    </div>
  );
};
export default Home;
