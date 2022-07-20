const ItemTitle = () => {
  return (
    <div className="h-full flex  space-x-3">
      <div className="h-full flex items-center">
        <div className="h-16 w-16 bg-red-500"></div>
      </div>
      <div className="laptop:w-64 mobile:w-52 py-1 ">
        <span className="block text-sm line-clamp-2 text-ellipses">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu nisl
          quis
        </span>
      </div>
    </div>
  );
};

export default ItemTitle;
