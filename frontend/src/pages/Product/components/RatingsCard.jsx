import Container from "./Container";
import IndividualRatingStat from "./Ratings/IndividualRatingStat";
import TotalRating from "./Ratings/TotalRating";
import { useState } from "react";
import RatingTab from "./Ratings/RatingTab";
import ReviewCard from "./Ratings/ReviewCard";
const RatingsCard = ({ stars, rate }) => {
  const [ratingType, setRatingType] = useState(0);

  return (
    <Container>
      <span className="block mb-2">Product Rating</span>
      <hr />
      <div className="flex  items-center justify-around my-3">
        <TotalRating stars={stars} rating={rate?.total} />
        <IndividualRatingStat rating={rate} />
      </div>
      <hr />
      <RatingTab type={ratingType} setType={setRatingType} />
      <hr />
      <div className="flex flex-col divide-y-[1px]">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </Container>
  );
};

export default RatingsCard;
