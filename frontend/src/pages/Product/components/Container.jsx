const Container = ({ children }) => {
  return (
    <div className="bg-white mobile:w-[90%] flex tablet:block justify-center laptop:w-3/4 p-3 shadow rounded-lg">
      {children}
    </div>
  );
};

export default Container;
