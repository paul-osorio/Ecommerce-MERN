const MyShop = () => {
  return (
    <div>
      <div className="mt-2 relative">
        <div className="w-full h-28 bg-gray-500 rounded-lg"></div>
        <div className="h-24 w-24 bg-blue-500 absolute -bottom-5 left-5 rounded-full"></div>
      </div>
      <div className="mt-8">
        <div className="border p-3 rounded-lg">
          <h1 className="font-medium text-gray-800">Description:</h1>
        </div>
      </div>
    </div>
  );
};

export default MyShop;
