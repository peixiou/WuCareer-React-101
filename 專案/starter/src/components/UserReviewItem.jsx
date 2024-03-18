import './UserReviewItem.scss'


const UserReviewItem = () => {
  return (
    <div className="user-review">
      <div className="review-title-container">
        <div>
          <p className="review-title">title</p>
          <p className="review-name">winny - 2023/11/01</p>
        </div>
        <p>⭐10/10</p>
      </div>
      
      <div className="review-content">
        <p>content</p>
      </div>
    </div>
  );
};
export default UserReviewItem;
