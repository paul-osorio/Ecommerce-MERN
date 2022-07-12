export const useCombineAddress = (addressContext) => {
  const { region, province, city, barangay } = addressContext;
  const reg = region === undefined ? null : region?.regDesc;
  const prov = province === undefined ? null : province?.provDesc;
  const citymun = city === undefined ? null : city?.citymunDesc;
  const brgy = barangay === undefined ? null : barangay?.brgyDesc;

  const address = `${reg === undefined ? "" : reg}${
    prov === undefined ? "" : ", " + camelCase(prov)
  }${citymun === undefined ? "" : ", " + camelCase(citymun)}${
    brgy === undefined ? "" : ", " + brgy
  }`;

  return { address, reg, prov, citymun, brgy };
};
export const camelCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
