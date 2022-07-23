import { StarRating } from "../../../components/Misc/StarRating";
import Carousel from "../../../components/Modal/ViewProduct/components/Carousel";
import thousandsSeperator from "../../../helper/thousandsSeperator";
import AddToCart from "./AddToCart";
import Carousell from "./Carousell";
import MainCardButtons from "./MainCardButtons";

const MainCard = ({ data }) => {
  return (
    <div className="bg-white mobile:w-[90%] flex tablet:block justify-center laptop:w-3/4 p-3 shadow rounded-lg">
      <div className="flex mobile:flex-col tablet:flex-row space-x-2">
        <div className="mobile:block laptop:hidden w-full">
          <Carousel images={data?.images} />
        </div>
        <div className="mobile:hidden laptop:block w-full">
          <Carousell images={data?.images} />
        </div>
        <div className="mt-2 w-full ">
          <div>
            <span className="text-2xl block">{data?.productName}</span>
            <Category category={data?.category} />
            <SoldRateCard rate={4.5} />
            <span className="block text-4xl mt-10 text-gray-700">
              ₱ {thousandsSeperator(5000)}
            </span>
          </div>

          <div className="mt-10">
            <div className="flex flex-col space-y-5 mt-5">
              <div className="flex space-x-10 justfiy-between items-center">
                <span className="text-sm">Shipping</span>
                <div className="text-sm flex space-x-5">
                  <span>Shipping Fee</span>
                  <span>-</span>
                  <span>P50</span>
                </div>
              </div>
              <div className="flex space-x-10 justfiy-between items-center">
                <span className="text-sm">Quantity</span>
                <AddToCart />
              </div>
            </div>

            <MainCardButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

const SoldRateCard = ({ rate }) => {
  return (
    <div className="flex items-center space-x-3 mt-2">
      <div className="flex space-x-2 items-center ">
        <span className="text-orange-500 border-b border-orange-500">
          {rate}
        </span>
        <StarRating rating={rate} className="text-orange-500" />
      </div>
      <div className="h-[1px] w-2 bg-gray-400" />
      <span>
        {4}K <span className="text-gray-500">Ratings</span>
      </span>
      <div className="h-[1px] w-2 bg-gray-400" />
      <span>
        {400} <span className="text-gray-500">Sold</span>
      </span>
    </div>
  );
};

const Category = ({ category }) => {
  return category?.map((category, i) => (
    <span
      role="button"
      key={i}
      className="bg-purple-400 hover:bg-purple-500 text-white text-xs px-2 py-1 rounded-full mr-2"
    >
      {category}
    </span>
  ));
};

export default MainCard;
