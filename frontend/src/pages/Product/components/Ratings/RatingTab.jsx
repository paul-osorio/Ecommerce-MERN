const RatingTab = ({ type, setType }) => {
  const tabs = [
    { value: 0, name: "All" },
    { value: 1, name: "5 Star" },
    { value: 2, name: "4 Star" },
    { value: 3, name: "3 Star" },
    { value: 4, name: "2 Star" },
    { value: 5, name: "1 Star" },
  ];

  return (
    <div className="flex w-full justify-between h-10 items-center">
      <span className="">Product Review</span>
      <div className="flex divide-x-2">
        {tabs.map((tab) => (
          <TabButton
            key={tab.value}
            value={tab.value}
            isActive={type === tab.value}
            name={tab.name}
          />
        ))}
      </div>
    </div>
  );
};

const TabButton = ({ name, isActive }) => {
  return (
    <div
      role="button"
      className={"h-full  w-16 flex justify-center items-center"}
    >
      <span
        className={
          isActive
            ? "text-purple-500 font-medium"
            : "text-gray-700 hover:text-gray-900"
        }
      >
        {name}
      </span>
    </div>
  );
};

export default RatingTab;
