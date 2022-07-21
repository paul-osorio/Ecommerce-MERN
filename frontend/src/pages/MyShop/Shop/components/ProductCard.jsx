import thousandsSeperator from "../../../../helper/thousandsSeperator";
import { ContentState, convertFromHTML } from "draft-js";
import ImageHolder from "../../../../components/Misc/ImageHolder";
import placeholderImg from "../../../../assets/images/placeholder.png";
import { useSearchParams } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const geturi = import.meta.env.VITE_APP_BASE_URL;
  const image = geturi + "product_images/" + product?.image;
  const description = convertFromHTML(product?.description);
  const state = ContentState.createFromBlockArray(
    description.contentBlocks,
    description.entityMap
  );

  const desc = state.getPlainText();

  return (
    <div className="laptop:col-span-1 mobile:col-span-full">
      <div className="shadow bg-white space-x-2 flex p-3 transition rounded border-white cursor-pointer border hover:border-purple-300">
        <div>
          <div className="h-20 w-20 bg-white border rounded">
            <ImageHolder
              src={image}
              placeholderImg={placeholderImg}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full">
          <p className="line-clamp-1 w-full">{product?.productName}</p>
          <p className="line-clamp-2 text-gray-600 text-sm w-full">{desc}</p>
          <div className="flex justify-between w-full items-center">
            <span className="text-orange-600 text-sm">
              P {thousandsSeperator(product?.price)}
            </span>
            <div className="flex space-x-2 ">
              <ProductButton type="delete" />
              <ProductButton
                type="edit"
                onClick={() => {
                  setSearchParams({ type: 1, id: product?._id });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductButton = ({ type, onClick, isEdit }) => {
  if (type === "edit") {
    return (
      <button
        onClick={onClick}
        type="button"
        className="active:shadow-none transition text-sm hover:bg-indigo-600 border border-indigo-500 bg-indigo-500 py-1 text px-2 rounded text-white shadow-sm shadow-gray-400"
      >
        {isEdit ? "Edit" : "View"}
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        type="button"
        className="active:shadow-none transition text-sm hover:bg-gray-300  bg-gray-200 py-1 text px-2 rounded text-gray-800 shadow-sm shadow-gray-400"
      >
        Delete
      </button>
    );
  }
};

export default ProductCard;
