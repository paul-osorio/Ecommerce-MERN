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

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery(["products"], fetchProducts, {
    getNextPageParam: (lastPage, pages) => {
      return lastPage.info.page + 1;
    },
    getPreviousPageParam: (lastPage, pages) => {
      return lastPage.info.page - 1;
    },
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div>
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
      <div>
        <button
          ref={ref}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load Newer"
            : "Nothing more to load"}
        </button>
      </div>
      <div>
        {isFetching && !isFetchingNextPage ? "Background Updating..." : null}
      </div>
    </div>
  );
};

export default Products;
