import useGetAllProducts from "../../../hooks/useGetAllProducts";
import ProductCard from "./components/ProductCard";
import { useSearchParams } from "react-router-dom";
import ViewProduct from "../../../components/Modal/ViewProduct/ViewProduct";
import { AnimatePresence } from "framer-motion";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, loading } = useGetAllProducts();
  const productId = searchParams.get("id");
  const onCloseModal = () => {
    searchParams.delete("id");
    setSearchParams(searchParams);
  };

  return (
    <>
      <div className="mt-2">
        {products.length > 0 ? (
          loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <div className="w-full">
                <hr className="py-1" />

                <div className="flex justify-between items-center px-2 mb-2">
                  <h3 className="text-lg text-gray-600">All Products</h3>
                  <div className="flex items-center justify-center shadow-inner bg-indigo-600 px-3 py-1 rounded">
                    <span className="text-[14px] text-white">Total: </span>

                    <span className="text-white text-[20px] mx-2 font-medium ">
                      {products.length}
                    </span>
                  </div>
                </div>
                <hr className="py-1 mb-2" />
              </div>
              <div className="w-full grid grid-cols-2 gap-x-3 gap-y-3 bg-gray-100 p-2 rounded-lg shadow-inner">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            </>
          )
        ) : (
          <EmptyProducts />
        )}
      </div>
      <AnimatePresence>
        {productId && <ViewProduct handleClose={onCloseModal} />}
      </AnimatePresence>
    </>
  );
};

const EmptyProducts = () => {
  return (
    <div className="h-64 flex items-center flex-col justify-center w-full">
      <img
        src="https://www.svgrepo.com/show/373489/cargo.svg"
        alt=""
        className="h-36 opacity-80 "
      />
      <span className="text-gray-500 text-lg">No Products Yet</span>
    </div>
  );
};
export default Products;
