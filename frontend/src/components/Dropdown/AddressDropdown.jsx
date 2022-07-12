import { useRef, useContext } from "react";
import { RegisterContext } from "../../context/RegisterContext";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import AddressDropdownCard from "./Card/AddressDropdownCard";
import { useField } from "formik";
import { useCombineAddress } from "../../hooks/useCombineAddress";
import { useEffect } from "react";

const AddressDropdown = ({ customError, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const { showDropdown, setShowDropdown, error } = useContext(RegisterContext);
  const registerContext = useContext(RegisterContext);
  const { reg } = useCombineAddress(registerContext);

  const ref = useRef();
  useOnClickOutside(ref, () => setShowDropdown(false));

  return (
    <div className="relative w-full mb-4" ref={ref}>
      <div className="relative w-full ">
        <input
          {...field}
          {...props}
          onFocus={() => setShowDropdown(true)}
          className={
            (showDropdown ? "ring-indigo-400 ring-inset ring-2 " : "") +
            " border mb-1 cursor-pointer  peer placeholder-transparent w-full text-sm py-3 transition px-4 rounded-lg outline-none"
          }
          placeholder="Region, Province, City, Barangay"
        />
        <i
          className={
            (!showDropdown ? "text-gray-700" : "text-indigo-500") +
            " absolute  fas fa-caret-down right-3 top-3.5"
          }
        ></i>
        <label
          className={`
                pointer-events-none
                absolute
                transition-all
                ${
                  reg !== undefined &&
                  "-top-2 left-2.5 text-xs bg-white text-indigo-500 px-2"
                }
                ${!showDropdown && " left-4 top-3.5 text-sm text-gray-400 "}
                ${
                  showDropdown &&
                  " left-2.5 -top-2 text-xs bg-white text-indigo-500 px-2 "
                }
              `}
        >
          Region, Province, City, Barangay
        </label>
        {error ? (
          <div className="text-red-500 text-xs">
            <i className="far fa-exclamation-circle mx-1"></i>
            {error}
          </div>
        ) : null}
      </div>
      {showDropdown && <AddressDropdownCard />}
    </div>
  );
};

export default AddressDropdown;
