import Backdrop from "../Backdrop";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOneProduct } from "../../../app/lib/product";
import Carousel from "./components/Carousel";
import thousandsSeperator from "../../../helper/thousandsSeperator";
import { ContentState, EditorState, Editor, convertFromHTML } from "draft-js";
import { ProductButton } from "../../../pages/MyShop/Shop/components/ProductCard";

const ViewProduct = ({ handleClose }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const des = convertFromHTML(product?.description || "");

  const state = ContentState.createFromBlockArray(
    des.contentBlocks,
    des.entityMap
  );
  const editorState = EditorState.createWithContent(state);

  const productId = searchParams.get("id");

  const fetchOneProduct = async () => {
    setLoading(true);
    try {
      const response = await getOneProduct(productId);
      const data = response.data.product;
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOneProduct();
  }, [productId]);

  return (
    <Backdrop onClick={handleClose} backdrop="bg-black/40">
      <div className="tablet:w-[750px] h-[95vh] overflow-auto mobile:w-full mobile:px-4 ">
        <div
          onClick={(e) => e.stopPropagation()}
          className="p-5 rounded-lg  shadow bg-white "
        >
          <div className="flex justify-end mb-2">
            <button
              onClick={handleClose}
              className="bg-red-400 hover:bg-red-500 active:scale-95 text-white h-6 w-6 rounded"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div className="flex tablet:flex-row mobile:flex-col tablet:items-start tablet:space-x-2">
            <div className="flex justify-center items-center">
              <Carousel images={product?.images} />
            </div>
            <div className="w-full">
              <h2>{product?.productName}</h2>
              <div>
                {product?.category?.map((category, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-sm px-2 py-1 rounded-full mr-2"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <span className="text-orange-500 block mt-5 text-5xl">
                ₱ {thousandsSeperator(parseInt(product?.price))}
              </span>
              <table className="table-auto w-full mt-3 border rounded">
                <thead className="text-gray-700 text-sm uppercase bg-gray-100">
                  <tr>
                    <th className=" text-left py-3 px-4" colSpan={2}>
                      Shipping Details
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="pl-4 py-1">Weight</td>
                    <td className="text-center w-20">
                      {product?.shipping?.weight}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="pl-4 py-1">Height</td>
                    <td className="text-center w-20">
                      {product?.shipping?.height}
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 py-1">Width</td>
                    <td className="text-center w-20">
                      {product?.shipping?.width}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="pl-4 py-1">Length</td>
                    <td className="text-center w-20">
                      {product?.shipping?.length}
                    </td>
                  </tr>
                  <tr>
                    <td className="pl-4 py-1">Fee</td>
                    <td className="text-center w-20">
                      ₱ {thousandsSeperator(parseInt(product?.shipping?.fee))}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex mt-5 justify-end space-x-2">
                <ProductButton type="delete" />
                <ProductButton type="edit" isEdit="true" />
              </div>
            </div>
          </div>
          <div className="mt-2">
            <span className="block">Description:</span>
            <div className="bg-gray-200 p-2 rounded shadow-inner">
              <div className="bg-white rounded shadow p-2">
                <Editor editorState={editorState} readOnly={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};

export default ViewProduct;
