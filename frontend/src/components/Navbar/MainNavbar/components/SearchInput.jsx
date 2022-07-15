import { useState } from "react";

const SearchInput = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-w-[400px] tablet:block mobile:hidden">
      <div
        className={
          "bg-gray-100 rounded-full flex items-center transition " +
          (isHovered && "shadow-sm shadow-purple-500")
        }
      >
        <input
          type="text"
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          placeholder="Search..."
          maxLength={128}
          className="bg-gray-100 text-sm h-10 w-full rounded-full px-5 outline-none transition"
        />
        <div className="mx-2">
          <div
            role="button"
            className="h-8 w-8 flex transition items-center active:bg-gray-300 hover:bg-gray-200 justify-center rounded-full"
          >
            <i className="far fa-search"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
