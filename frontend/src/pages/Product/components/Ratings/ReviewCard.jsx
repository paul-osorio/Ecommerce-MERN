import ImageHolder from "../../../../components/Misc/ImageHolder";
import placeholderImg from "../../../../assets/images/placeholder.png";
import { StarRating } from "../../../../components/Misc/StarRating";
import LikeComment from "./LikeComment";
import SellerResponseCard from "./SellerResponseCard";

const ReviewCard = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-start">
        <div className="flex space-x-3 items-start">
          <ImageHolder
            placeholderImg={placeholderImg}
            className="w-12 h-12 object-cover rounded-full"
          />
          <div className="">
            <div className="flex justify-between mb-2">
              <div>
                <span className="text-sm text-gray-700">Juan Dela Cruz</span>
                <StarRating rating={5} className="text-sm text-amber-500" />
              </div>
              <span className="text-sm">20 April 2021</span>
            </div>

            <div className="">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, dolorem? Explicabo, dignissimos temporibus aperiam
                nemo minima odio eligendi quibusdam quis, ratione nostrum harum
                sapiente doloribus delectus perferendis exercitationem deserunt
                aut? Perferendis, sed animi reprehenderit suscipit voluptatum
                sunt eum ullam accusantium est
              </p>
            </div>

            <LikeComment />

            <SellerResponseCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
