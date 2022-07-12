import { useState } from "react";
import AddressButton from "../../Buttons/AddressButton";
import { useContext } from "react";
import regions from "../../../json/region.json";
import {
  getProvinceByRegion,
  getCityByProvince,
  getBarangayByCity,
} from "../../../hooks/useAddresses";
import { RegisterContext } from "../../../context/RegisterContext";
import { camelCase } from "../../../hooks/useCombineAddress";
import { SelectAddressButton } from "../../Buttons/SelectAddressButton";

const AddressDropdownCard = () => {
  const {
    setError,
    region,
    setRegion,
    province,
    setProvince,
    city,
    setCity,
    barangay,
    setBarangay,
    setShowDropdown,
  } = useContext(RegisterContext);
  const [active, setActive] = useState(0);
  const [searchbrgy, setSearchbrgy] = useState("");
  const regionList = regions.RECORDS;
  const provinceList = getProvinceByRegion(region?.regCode);
  const cityList = getCityByProvince(province?.provCode);
  const barangayList = getBarangayByCity(city?.citymunCode);

  const addressbutton = [
    {
      Name: "Region",
      activeVal: 0,
      isActive: active === 0,
      isDisabled: true,
    },
    {
      Name: "Province",
      activeVal: 1,
      isActive: active === 1,
      isDisabled: region,
    },
    {
      Name: "City",
      activeVal: 2,
      isActive: active === 2,
      isDisabled: province,
    },
    {
      Name: "Barangay",
      activeVal: 3,
      isActive: active === 3,
      isDisabled: city,
    },
  ];

  return (
    <div className="absolute z-10 bg-white w-full border rounded-lg shadow-lg">
      <div className="flex border-b">
        {addressbutton.map((button, index) => (
          <AddressButton key={index} {...button} setActive={setActive} />
        ))}
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
                name={camelCase(val.provDesc)}
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
                name={camelCase(val.citymunDesc)}
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
              className="text-sm px-2 py-2 w-full outline-none bg-gray-100"
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
                      setError(null);
                    }}
                    name={camelCase(val.brgyDesc)}
                  />
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressDropdownCard;
