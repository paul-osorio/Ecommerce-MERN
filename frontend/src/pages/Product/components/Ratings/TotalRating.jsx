import { StarRating } from "../../../../components/Misc/StarRating";

const TotalRating = () => {
  return (
    <div className="p-3">
      <span className="block mb-2">
        <span className="text-5xl">4.9</span>
        <span className="text-gray-500 text-2xl">/5</span>
      </span>
      <StarRating rating={3.5} className="text-3xl text-amber-500" />
    </div>
  );
};

export default TotalRating;
