import { useState } from "react";
import AddressButton from "../../Buttons/AddressButton";
import { useContext } from "react";
import regions from "../../../json/region.json";
import {
  getProvinceByRegion,
  getCityByProvince,
  getBarangayByCity,
} from "../../../hooks/useAddresses";
import { AddressContext } from "../../../context/AddresContext";

const AddressDropdownCard = () => {
  const {
    region,
    setRegion,
    province,
    setProvince,
    city,
    setCity,
    barangay,
    setBarangay,
    setShowDropdown,
  } = useContext(AddressContext);
  const [active, setActive] = useState(0);
  const [searchbrgy, setSearchbrgy] = useState("");
  const regionList = regions.RECORDS;
  const provinceList = getProvinceByRegion(region?.regCode);
  const cityList = getCityByProvince(province?.provCode);
  const barangayList = getBarangayByCity(city?.citymunCode);

  return (
    <div className="absolute z-10 bg-white w-full border rounded-lg shadow-lg">
      <div className="flex border-b">
        <AddressButton
          Name="Region"
          setActive={setActive}
          activeVal={0}
          isActive={active === 0}
          isDisabled={true}
        />
        <AddressButton
          Name="Province"
          setActive={setActive}
          activeVal={1}
          isActive={active === 1}
          isDisabled={region}
        />
        <AddressButton
          Name="City"
          setActive={setActive}
          activeVal={2}
          isActive={active === 2}
          isDisabled={province}
        />
        <AddressButton
          Name="Barangay"
          setActive={setActive}
          activeVal={3}
          isActive={active === 3}
          isDisabled={city}
        />
      </div>
      <div className="h-60 overflow-auto changescrollbar">
        {active === 0 &&
          regionList.map((val) => (
            <SelectAddressButton
              key={val.regCode}
              isSelected={region?.regCode === val.regCode}
              onClick={() => {
                setRegion(val);
                setProvince(null);
                setCity(null);
                setBarangay(null);
              }}
              name={val.regDesc}
            />
          ))}

        {active === 1 &&
          provinceList.map((val) => {
            return (
              <SelectAddressButton
                key={val.provCode}
                isSelected={province?.provCode === val.provCode}
                onClick={() => {
                  setProvince(val);
                  setCity(null);
                  setBarangay(null);
                }}
                name={val.provDesc}
              />
            );
          })}
        {active === 2 &&
          cityList.map((val) => {
            return (
              <SelectAddressButton
                key={val.citymunCode}
                isSelected={city?.citymunCode === val.citymunCode}
                onClick={() => {
                  setCity(val);
                  setBarangay(null);
                }}
                name={val.citymunDesc}
              />
            );
          })}
        {active === 3 && (
          <div>
            <input
              type="text"
              onChange={(e) => setSearchbrgy(e.target.value)}
              value={searchbrgy}
              placeholder="Search barangay..."
              className="text-sm px-2 py-1 w-full outline-none bg-gray-100"
            />
            {barangayList
              .filter((dat) =>
                dat.brgyDesc.toLowerCase().includes(searchbrgy.toLowerCase())
              )
              .map((val) => {
                return (
                  <SelectAddressButton
                    key={val.brgyCode}
                    isSelected={barangay?.brgyCode === val.brgyCode}
                    onClick={() => {
                      setBarangay(val);
                      setShowDropdown(false);
                    }}
                    name={val.brgyDesc}
                  />
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};
const SelectAddressButton = ({ name, onClick, isSelected }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className={
        (isSelected ? "bg-indigo-600 text-white" : "hover:bg-gray-50") +
        " py-3 border-b px-2  text-xs normal-case"
      }
    >
      {name}
    </div>
  );
};

export default AddressDropdownCard;
