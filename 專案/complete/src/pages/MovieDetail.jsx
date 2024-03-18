import UserReviewItem from "../components/UserReviewItem"
import {getOverviewMovieDetails,getFullCredits} from '../api/api'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useWatchList from "../hook/useWatchList";
import "./MovieDetail.scss"

const MovieDetail = () => {
  const {addMovie} = useWatchList()
  const {id} = useParams()
  const [movieDetailItem,setMovieDetailItem ] = useState({})
  const [movieCredits, setMovieCredits] = useState({})
  const getDetail = async () => {
    const resp = await getOverviewMovieDetails({tconst:id})
    setMovieDetailItem(resp)
  }
  const getCredits = async () => {
    const resp = await getFullCredits({tconst:id})
    setMovieCredits(resp)
  }
  const addWatchList = (movie) => {
    let list = []
    if (localStorage.getItem("watchlist")) {
      list = [...JSON.parse(localStorage.getItem("watchlist")),movie]
      console.log(list)
      localStorage.setItem("watchlist",JSON.stringify(list))
    } else {
      list.push(movie)
      localStorage.setItem("watchlist",JSON.stringify(list))
    }
  }
  useEffect(()=>{
    getDetail()
    getCredits()
  },[])
  return (
    <div className="movie-detail">
      {
        movieDetailItem && <div className="movie-detail-container">
        <div className="title-container">
          <div className="movie-title">
            <p>{movieDetailItem.title?.title}</p>
            <p>{movieDetailItem.title?.year} { Math.floor(movieDetailItem.title?.runningTimeInMinutes / 60)}h{ movieDetailItem.title?.runningTimeInMinutes  % 60}m</p>
          </div>
          
          <div className="movie-rate">
            <p>IMDb RATING</p>
            <p>{movieDetailItem.ratings?.rating} / 10</p>
          </div>
        </div>
        <div className="movie-image">
          <img src={movieDetailItem.title?.image.url} alt="" />
          <p className="add" onClick={()=>addMovie(movieDetailItem.title)}>+ Add To WatchList</p>
        </div>
        <div className="genre-container">
          {
            movieDetailItem.genres?.map(genre=>{
              return <span className="genre">{genre}</span>
            })
          }
        </div>
        <div className="summary">
          <p>
            {movieDetailItem.plotOutline?.text}
          </p>
          <p>
            <span>Stars | </span> {movieCredits?.cast?.slice(0,3).map(cast=>{return <span>{cast.name}</span>})}
          </p>
          <p>
            <span>Director | </span>{movieCredits?.crew?.director.map(director=>{return <span>{director.name}</span>})}
          </p>
          <p>
            <span>Writer | </span>{movieCredits?.crew?.writer.map(writer=>{return <span>{writer.name}</span>})}
          </p>
        </div>
        
      
        
      </div>
      }
      
      <p className="session-title">User Reviews</p>
      <UserReviewItem/>
    </div>
  );
};
export default MovieDetail;
