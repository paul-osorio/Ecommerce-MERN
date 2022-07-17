const useArrangeAddress = (data) => {
  const barangay = data?.barangay.brgyDesc;
  const city = data?.city.citymunDesc;
  const province = data?.province.provDesc;
  const region = data?.region.regDesc;
  const street = data?.street;

  const fullAddress = `${street} ${barangay} ${city} ${province} ${region}`;

  return fullAddress;
};

export default useArrangeAddress;
