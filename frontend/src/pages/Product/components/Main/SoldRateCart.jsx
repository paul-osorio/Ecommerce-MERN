import { StarRating } from "../../../../components/Misc/StarRating";

export const SoldRateCard = ({ stars, rating }) => {
  return (
    <div className="flex items-center space-x-3 mt-2">
      <div className="flex space-x-2 items-center ">
        <span className="text-orange-500 border-b border-orange-500">
          {stars}
        </span>
        <StarRating rating={stars} className="text-orange-500" />
      </div>
      <div className="h-[1px] w-2 bg-gray-400" />
      <span>
        {rating ? (
          <>
            {rating?.total} <span className="text-gray-500">Ratings</span>
          </>
        ) : (
          <span className="text-gray-500">No Ratings</span>
        )}
      </span>
      <div className="h-[1px] w-2 bg-gray-400" />
      <span>
        {0} <span className="text-gray-500">Sold</span>
      </span>
    </div>
  );
};
