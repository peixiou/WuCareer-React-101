import './MovieListItem.scss'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const MovieCard = ({movieDetail,addMovie,removeMovie}) => {
  const [remove,setRemove] = useState(false)
  const navigatge = useNavigate()
  const toDetail = () => {
    navigatge(movieDetail.id)
  }
  const toggleWatchList = (e,movie) => {
    e.stopPropagation()
    if (remove){
      removeMovie(movie)
    } else {
      addMovie(movie)
    }
    setRemove(preState=>!preState)
  }
  useEffect(()=>{
    const watchList = localStorage.getItem('watchlist')?JSON.parse(localStorage.getItem('watchlist')):null
    if (watchList){
      if (watchList.find(movie=>movie.id===movieDetail.id)){
        setRemove(true)
      }
    }
  })
  return (
    <div className="movie-item" onClick={toDetail}>
      <div className="movie-img">
        <img src={movieDetail.image?.url} alt="" />
      </div>
      <div className="movie-title">
        <p>{movieDetail.title}</p>
        <p className="movie-year">{movieDetail.year} { Math.floor(movieDetail.runningTimeInMinutes / 60)}h{ movieDetail.runningTimeInMinutes  % 60}m</p>
        <p className="add" onClick={(e)=>toggleWatchList(e,movieDetail)}>
          {
            remove?"- Remove From WatchList":"+ Add To WatchList"
          }
        </p>      
      </div>
      
    </div>
  );
};
export default MovieCard;
