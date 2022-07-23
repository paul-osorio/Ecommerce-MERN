const MainCardButtons = () => {
  return (
    <div className="flex space-x-2 mt-10">
      <button className="border-purple-500 hover:bg-purple-50 text-purple-600 border px-5 py-2">
        Add To Cart
      </button>
      <button className="bg-purple-500  text-white hover:bg-purple-600 border-purple-500  px-5 py-2">
        Buy Now
      </button>
    </div>
  );
};

export default MainCardButtons;
