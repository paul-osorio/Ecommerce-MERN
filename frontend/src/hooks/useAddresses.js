import provinces from "../json/province.json";
import citymun from "../json/citymun.json";
import barangay from "../json/barangay.json";

export const getProvinceByRegion = (region) => {
  const prov = provinces.RECORDS;

  //filter the province list by region
  const provinceList = prov.filter((province) => province.regCode === region);
  return provinceList;
};

export const getCityByProvince = (province) => {
  const city = citymun.RECORDS;

  //filter the city list by province
  const cityList = city.filter((city) => city.provCode === province);

  return cityList;
};

export const getBarangayByCity = (city) => {
  const brgy = barangay.RECORDS;

  //filter the barangay list by city
  const barangayList = brgy.filter((barangay) => barangay.citymunCode === city);
  return barangayList;
};
