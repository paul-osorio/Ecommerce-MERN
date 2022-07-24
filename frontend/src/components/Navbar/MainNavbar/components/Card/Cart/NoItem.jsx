export const NoItem = () => {
  return (
    <div className="p-2 py-3 bg-white">
      <div className="w-full flex justify-center">
        <img
          src="https://www.svgrepo.com/show/233885/shopping-bag.svg"
          className="h-10 w-10 opacity-80"
          alt=""
        />
      </div>
      <span className="block text-center text-sm text-gray-500">
        No Products Yet
      </span>
    </div>
  );
};
