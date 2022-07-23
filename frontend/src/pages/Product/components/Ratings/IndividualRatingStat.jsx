import { StarRating } from "../../../../components/Misc/StarRating";

const IndividualRatingStat = () => {
  const star5 = 200;
  const star4 = 142;
  const star3 = 20;
  const star2 = 5;
  const star1 = 1;

  const total = star5 + star4 + star3 + star2 + star1;

  return (
    <div>
      <Range star={5} total={total} population={star5} />
      <Range star={4} total={total} population={star4} />
      <Range star={3} total={total} population={star3} />
      <Range star={2} total={total} population={star2} />
      <Range star={1} total={total} population={star1} />
    </div>
  );
};

const Range = ({ star, total, population }) => {
  const percentage = (population / total) * 100;

  return (
    <div className="flex items-center space-x-2 mb-1">
      <div className="flex space-x-1">
        <StarRating rating={star} className="text-amber-500" />
      </div>
      <div className="w-52 h-3 bg-gray-200 rounded-full">
        <div
          className="bg-amber-500 h-full rounded-full"
          style={{
            width: percentage + "%",
          }}
        ></div>
      </div>
      <span className="text-sm text-gray-700">{population}</span>
    </div>
  );
};

export default IndividualRatingStat;
