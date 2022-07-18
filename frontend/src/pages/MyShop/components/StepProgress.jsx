export const StepProgress = ({ Step }) => {
  return (
    <div className="flex justify-center mt-5 items-center mobile:px-10 tablet:px-20 ">
      <Progress Name="Store name" isDone={Step >= 2} />
      <div
        className={
          (Step >= 2 ? "bg-purple-500 " : "bg-gray-200") +
          " w-full h-1 relative transition"
        }
      ></div>
      <Progress Name="Banner & Profile" isDone={Step >= 3} />
      <div
        className={
          (Step >= 3 ? "bg-purple-500 " : "bg-gray-200") +
          " w-full h-1 relative transition"
        }
      ></div>
      <Progress Name="Store description" />
    </div>
  );
};

const Progress = ({ Name, isDone }) => {
  return (
    <div className="h-5 w-5 flex items-center z-10">
      <div className="h-2 w-2 ring-4 ring-purple-500 flex items-center justify-center bg-white rounded-full relative">
        {isDone && (
          <div className="bg-white rounded-full absolute z-10">
            <i className="fas fa-check-circle  text-purple-500 text-2xl "></i>
          </div>
        )}
        <span className="absolute top-5 text-xs whitespace-nowrap">{Name}</span>
      </div>
    </div>
  );
};
