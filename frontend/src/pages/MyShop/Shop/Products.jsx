import ProductCard from "./components/ProductCard";
import { useSearchParams } from "react-router-dom";
import ViewProduct from "../../../components/Modal/ViewProduct/ViewProduct";
import { AnimatePresence } from "framer-motion";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getAllProductPage, deleteProduct } from "../../../app/lib/product";
import DeleteModal from "../../../components/Modal/DeleteModal";
import { useState } from "react";
import { ControlButton } from "./components/ControlButton";

const fetchProducts = async (page) => {
  const res = await getAllProductPage(10, page);
  return res?.data;
};

const Products = () => {
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    data: res,
    refetch: refetchProducts,
  } = useQuery(["products", page], () => fetchProducts(page), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
  console.log(res);

  const { mutate: productDelete } = useMutation(deleteProduct, {
    onSettled: async () => {
      await refetchProducts();
    },
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const productIdDelete = searchParams.get("delete");
  const onCloseModal = () => {
    searchParams.delete("id");
    setSearchParams(searchParams);
  };
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <>
      <div className="mt-2">
        {res.results.length > 0 ? (
          isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              <TopBar length={res.info.totalResults} />
              <div className="w-full grid grid-cols-2 gap-x-3 gap-y-3 bg-gray-100 p-2 rounded-lg shadow-inner">
                {res.results.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
              <div className="flex justify-between">
                <span></span>
                <div className="flex justify-end space-x-2 mt-2">
                  <ControlButton type={1} setPage={setPage} page={page} />
                  <ControlButton
                    type={2}
                    setPage={setPage}
                    page={page}
                    res={res}
                  />
                </div>
              </div>
            </>
          )
        ) : (
          <EmptyProducts />
        )}
      </div>
      <AnimatePresence>
        {productId && <ViewProduct handleClose={onCloseModal} />}
        {productIdDelete && (
          <DeleteModal
            handleClose={() => {
              searchParams.delete("delete");
              setSearchParams(searchParams);
            }}
            handleDelete={() => {
              productDelete(productIdDelete);
              searchParams.delete("delete");
              setSearchParams(searchParams);
            }}
          />
        )}
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

const TopBar = ({ length }) => {
  return (
    <div className="w-full">
      <hr className="py-1" />

      <div className="flex justify-between items-center px-2 mb-2">
        <h3 className="text-lg text-gray-600">All Products</h3>
        <div className="flex items-center justify-center shadow-inner bg-indigo-600 px-3 py-1 rounded">
          <span className="text-[14px] text-white">Total: </span>

          <span className="text-white text-[20px] mx-2 font-medium ">
            {length}
          </span>
        </div>
      </div>
      <hr className="py-1 mb-2" />
    </div>
  );
};

export default Products;
