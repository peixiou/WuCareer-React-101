import './MovieListItem.scss'

const MovieListItem = () => {
  return (
    <div className="movie-item" onClick={toDetail}>
      <div className="movie-img">
        <img src="" alt="" />
      </div>
      <div className="movie-title">
        <p>title</p>
        <p className="movie-year">2023 0h0m</p>
        <p className="add" onClick={(e)=>toggleMovie(e,movie)}>
          + Add To WatchList
        </p>      
      </div>
      
    </div>
  );
};
export default MovieListItem;
