import "./MovieDetail.scss"

const MovieDetail = () => {
  return (
    <div className="movie-detail">
      <div className="movie-detail-container">
        <div className="title-container">
          <div className="movie-title">
            <p>title</p>
            <p>2023 0h0m</p>
          </div>
          
          <div className="movie-rate">
            <p>IMDb RATING</p>
            <p>10 / 10</p>
          </div>
        </div>
        <div className="movie-image">
          <img src="" alt="" />
          <p className="add">+ Add To WatchList</p>
        </div>
        <div className="genre-container">
          <span className="genre">genre</span>
        </div>
        <div className="summary">
          <p>
            Detail
          </p>
          <p>
            <span>Stars | </span>
          </p>
          <p>
            <span>Director | </span>
          </p>
          <p>
            <span>Writer | </span>
          </p>
        </div>
      </div>
      
      <p className="session-title">User Reviews</p>
    </div>
  );
};
export default MovieDetail;
