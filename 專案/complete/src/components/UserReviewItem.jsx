import heartIcon from '../img/heart.png';
import heartFillIcon from '../img/heart-fill.png';
import './UserReviewItem.scss'


const UserReviewItem = () => {
  const addWatchList = () => {
    
  }
  const review = {
    author:{
      displayName:"TheLittleSongbird",
      userId:"/user/ur20552756/"
    },   
    authorRating:10,
    helpfulnessScore:0.7758123924188439,
    id:"/title/tt0944947/userreviews/rw3853874",
    interestingVotes:{
      down:29,
      up:149
    },
    languageCode:"eng",
    reviewText:"Was over-time on a gradual binge of watching 'Game of Thrones' from the first episode (gradual because of being so busy), having heard nothing but amazing things about it from friends, family and IMDb reviewers. Plus with such a great cast of talent and a brilliant book series, how could it possibly go wrong? The good news is that 'Game of Thrones' didn't go wrong. Quite the opposite. Not only is it a rare television show that does its original source material justice and treats it with respect but it is on its own merits one of the finest, most addictive and consistently compelling shows in recent years. A television show so brilliant that one has to actually check that it was made for television when everything is done to such a high level that it puts many films made today to shame. This is one of the strongest examples of an acclaimed show that deserves every ounce of the praise it's garnered. Visually, 'Game of Thrones' looks amazing. The scenery is throughout spectacular, the sets are hugely atmospheric and beautiful on the eyes with a real meticulous eye for detail and the costumes suit the characters to a tee. Then there are the special effects that are some of the best of any television programme and are not overused or abused, the scale, the detail and how they actually have character and soul are better than those in a lot of the big-budget blockbusters. As well the cinematography and editing, which are cinematic quality as well. One cannot talk about 'Game of Thrones' without mentioning the thematically, orchestrally and atmospherically multi-layered music scoring and the unforgettable main theme. Again, worthy of a high-budget fantasy/action/drama film. It is hard not to be bowled over by the quality of the writing, outstanding isn't a strong enough adjective to describe how good the writing is. It always has a natural flow, is layered and thought-provoking and demonstrates a wide range of emotions such as suspenseful tension, poignant pathos and witty humour. The story-lines are paced so beautifully, structured with such nuance and attention to coherence, a high emotional level and touch upon complex and sensitive themes with intelligence and tact. Whenever there's a set-piece or more action-oriented scene there's always a reason, never there for the sake of it. Not only are the set-pieces done with a lot epic scale, superb staging, excitement and dramatic tension but underneath all the scale and flashy attention to detail there is a lot of heart and a multi-layered one. They're not overlong, nor are there out of place elements. Characters are a huge part of the appeal too. 'Game of Thrones' has characters that are so well developed and as close to real life as one can get despite being in a fantasy world. These characters are not hero and villain archetypes (Joffrey is the only one close to that, the difference though is that he is an extremely interesting one with a lot of development who ranks well beyond one hundred percent on the threat level scale), they have much more to them and have strengths and flaws. Decisions are logical and one doesn't like any character any less when a decision is not the right one because mistakes are acknowledged and learnt from. 'Game of Thrones' cast is full of talented names and, thanks to so well rounded characters and such great writing, nothing but the very best is gotten out of them. Even those who are not favourites of mine. Big acting standouts are Peter Dinklage, Sean Bean, Lena Headey and Jack Gleeson (Joffrey being the king of all young characters with not a redeeming bone in their body). In conclusion, absolutely outstanding and a rare television show worthy of being a cinematic modern classic. This review may sound superlatively hyperbolic, but to me 'Game of Thrones' is that good. 10/10 Bethany Cox",
    reviewTitle:"This is a television show?",
    spoiler:false,
    submissionDate:"2017-11-09",
    titleId:"/title/tt0944947/",
  }
  return (
    <div className="user-review">
      <div className="review-title-container">
        <div>
          <p className="review-title">{review.reviewTitle}</p>
          <p className="review-name">{review.author.displayName} - {review.submissionDate}</p>
        </div>
        <p>⭐{review.authorRating}/10</p>
      </div>
      
      <div className="review-content">
        <p>{review.reviewText}</p>
      </div>
    </div>
  );
};
export default UserReviewItem;
