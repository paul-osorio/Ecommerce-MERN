import { useNavigate } from "react-router-dom";
import placeholderImg from "../../../assets/images/placeholder.png";
import ImageHolder from "../../../components/Misc/ImageHolder";
import { StarRating } from "../../../components/Misc/StarRating";

export const ProductCard = ({ product }) => {
  const getUri = import.meta.env.VITE_APP_BASE_URL;
  const image = product?.images[0];
  const imageUrl = `${getUri}/product_images/${image}`;
  const navigate = useNavigate();

  const viewProduct = () => {
    navigate({
      pathname: `/${encodeURIComponent(product.productName)}`,
      search: `?id=${product._id}`,
    });
  };

  return (
    <div
      role="button"
      onClick={viewProduct}
      className="bg-white w-full mb-3 cursor-pointer shadow-gray-300  shadow rounded hover:border-purple-500 border border-white"
    >
      <div className="w-full h-36">
        <ImageHolder
          src={imageUrl}
          placeholderImg={placeholderImg}
          className="h-full object-cover w-full rounded-t"
        />
      </div>
      <div className="p-2 h-24 flex flex-col justify-between">
        <p className="line-clamp-2 text-sm">{product?.productName}</p>
        <div className="flex justify-between items-center">
          <span className="text-orange-600">₱ {product?.price}</span>
          <StarRating rating={2.5} className="text-xs text-amber-500" />
        </div>
      </div>
    </div>
  );
};
