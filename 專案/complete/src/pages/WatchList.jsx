import { useEffect, useState } from 'react';
import MovieListItem from '../components/MovieListItem'
import './Watchlist.scss'
import useWatchList from '../hook/useWatchList';

const WatchList = () => {
  const [addMovie,removeMovie,watchList] = useWatchList()
  useEffect(()=>{
    console.log(watchList)
  },[watchList])
  return (
    <div className="watch-list">
      <div className="watch-list-container">
        {
          watchList?.length>0?
           watchList.map(movie=>{
            return <MovieListItem movieDetail={movie} addMovie={addMovie} removeMovie={removeMovie}/>
          }):(
            <div className="empty">
              find some movies you like
            </div>
          )
        }
        
      </div>
    </div>
  );
};
export default WatchList;
