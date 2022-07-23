import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getAllProduct, productPagination } from "../../../app/lib/product";
import { ProductCard } from "./ProductCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const fetchProducts = async ({ pageParam = 1 }) => {
  const res = await productPagination(18, pageParam);
  return res?.data;
};

const Products = () => {
  const { ref, inView } = useInView();

  const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(["products"], fetchProducts, {
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.info.page === lastPage.info.totalPages) return undefined;
        return lastPage.info.page + 1;
      },
      getPreviousPageParam: (lastPage, pages) => {
        return lastPage.info.page - 1;
      },
    });

  console.log(hasNextPage);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="mb-5">
      <div className="mb-2">
        <p className="text-xl font-medium text-gray-700">Discover Products</p>
        <hr />
      </div>
      {data?.pages.map((page, i) => (
        <div
          key={i}
          className="grid mobile:grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-5 laptopL:grid-cols-6 gap-x-3"
        >
          {page.results.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ))}
      <div className="flex justify-center">
        <button
          ref={ref}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className={
            "bg-white px-16 rounded-full py-2 shadow border border-purple-500 " +
            (hasNextPage
              ? "text-purple-600 hover:bg-purple-500 hover:text-white "
              : "bg-gray-200 text-gray-800 border-none")
          }
        >
          {isFetchingNextPage ? (
            <span>
              <i className="fas fa-spinner-third mr-2 animate-spin"></i>Loading
              more...
            </span>
          ) : hasNextPage ? (
            "See more"
          ) : (
            <span>
              Oops! looks like there is no more products{" "}
              <i className="fas fa-frown ml-2"></i>
            </span>
          )}
        </button>
      </div>
      <div>
        {isFetching && !isFetchingNextPage ? "Background Updating..." : null}
      </div>
    </div>
  );
};

export default Products;
