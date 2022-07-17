import thousandsSeperator from "../../../../helper/thousandsSeperator";

export const ItemPrice = ({ Price = 0 }) => {
  const price = thousandsSeperator(Price);
  return (
    <div className="mobile:hidden min-w-[56px] laptop:block h-full">
      <h1 className="text-orange-500 text-center">₱ {price}</h1>
      <div className="flex  justify-center space-x-3">
        <div role="button">
          <i className="far text-lg text-gray-500 fa-heart"></i>
        </div>
        <div role="button">
          <i className="far text-lg text-gray-500 fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
};
