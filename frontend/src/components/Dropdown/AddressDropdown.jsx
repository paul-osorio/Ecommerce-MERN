import { useState, useRef, createContext, useContext } from "react";
import { AddressContext } from "../../context/AddresContext";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import AddressDropdownCard from "./Card/AddressDropdownCard";

const AddressDropdown = () => {
  const { showDropdown, setShowDropdown, region, province, city, barangay } =
    useContext(AddressContext);
  const ref = useRef();
  useOnClickOutside(ref, () => setShowDropdown(false));
  const reg = region === undefined ? null : region?.regDesc;
  const prov = province === undefined ? null : province?.provDesc;
  const citymun = city === undefined ? null : city?.citymunDesc;
  const brgy = barangay === undefined ? null : barangay?.brgyDesc;

  const address = `${reg === undefined ? "" : reg}${
    prov === undefined ? "" : ", " + camelCase(prov)
  }${citymun === undefined ? "" : ", " + camelCase(citymun)}${
    brgy === undefined ? "" : ", " + brgy
  }`;

  return (
    <div className="relative w-full mb-2" ref={ref}>
      <div className="relative w-full ">
        <input
          type="text"
          onFocus={() => setShowDropdown(true)}
          value={address}
          className={
            (showDropdown ? "ring-indigo-400 ring-inset ring-2 " : "") +
            " border mb-1  peer placeholder-transparent w-full text-sm py-3 px-4 rounded-lg outline-none"
          }
          placeholder="Region, Province, City, Barangay"
          readOnly
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
                transition-
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
      </div>
      {showDropdown && <AddressDropdownCard />}
    </div>
  );
};

//convert all uppercase words to camel case words
const camelCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
export default AddressDropdown;
