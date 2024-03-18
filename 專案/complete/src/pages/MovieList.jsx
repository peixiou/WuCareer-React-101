import React, { useEffect, useState } from 'react'
import { getMovieDetails,getPopularMovieByGenre } from '../api/api.js'
import {useParams} from 'react-router-dom'
import MovieListItem from '../components/MovieListItem'
import './MovieList.scss'
import useWatchList from '../hook/useWatchList'

const ProductList = () => {
  const [addMovie,removeMovie,watchList] = useWatchList()
  const {genre} = useParams()
  const [movieList,setMovieList] = useState([])
  const getMovieListByGenre = async () => {
    setMovieList([])
    const resp = await getPopularMovieByGenre({genre:genre,limit:3})
    const list = []
    resp.forEach(async(res)=>{
      const detail = await getMovieDetails(res.slice(7,-1))
      setMovieList(preState=>[...preState,detail])
    })
  }
  useEffect(()=>{
    getMovieListByGenre()
  },[genre])
  return (
    <section>
      <div className="movie-list">
        <p className="genre">{genre}</p>
        <div className="movie-list-container">
        {movieList.length>0?movieList.map(movie=><MovieListItem  movieDetail={movie} addMovie={addMovie} removeMovie={removeMovie}/>):<></>}  
        </div>
      </div>
    </section>
  );
};
export default ProductList;
