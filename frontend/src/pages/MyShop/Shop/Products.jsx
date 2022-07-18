const Products = () => {
  return (
    <div className="mt-2">
      {/* <h1>hi</h1> */}
      <EmptyProducts />
    </div>
  );
};

const EmptyProducts = () => {
  return (
    <div className="h-52 flex items-center flex-col justify-center w-full">
      <img
        src="https://www.svgrepo.com/show/373489/cargo.svg"
        alt=""
        className="h-32 opacity-80 "
      />
      <span className="text-gray-500">No Products Yet</span>
    </div>
  );
};
export default Products;
