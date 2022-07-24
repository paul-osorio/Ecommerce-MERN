import ImageHolder from "../../../../../Misc/ImageHolder";
import placeholderImg from "../../../../../../assets/images/placeholder.png";

export const ItemCard = ({ item }) => {
  const imageUrl =
    import.meta.env.VITE_APP_BASE_URL +
    "product_images/" +
    item.product.images[0];
  return (
    <div className="px-2">
      <div
        className="w-full flex rounded-lg p-2 items-center hover:bg-gray-50"
        role="button"
      >
        <div className="mr-3">
          <div className="h-10 w-10 bg-red-500 rounded">
            <ImageHolder
              src={imageUrl}
              placeholderImg={placeholderImg}
              className="h-full w-full border object-contain"
            />
          </div>
        </div>
        <div className="w-full h-18 ">
          <span className="text-sm font-medium line-clamp-1">
            {item.product.productName}
          </span>
        </div>
      </div>
    </div>
  );
};
