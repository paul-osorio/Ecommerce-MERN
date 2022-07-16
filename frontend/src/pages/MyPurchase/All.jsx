import PurchaseCard from "../../components/Card/PurchaseCard";
import PurchaseContainer from "../../components/Containers/PurchaseContainer";

const AllPurchase = () => {
  return (
    <PurchaseContainer>
      <PurchaseCard Shop="Example Shop" Status="Received" />
      <PurchaseCard Shop="Example Shop" Status="Delivered" />
      <PurchaseCard Shop="Example Shop" Status="Received" />
      <PurchaseCard Shop="Example Shop" Status="Received" />

      {/* <NoPurchase /> */}
    </PurchaseContainer>
  );
};

export const NoPurchase = () => {
  return (
    <div className="w-full h-[300px] flex items-center justify-center">
      <div className="w-full">
        <div className="flex justify-center w-full">
          <img
            src="https://www.svgrepo.com/show/61842/clipboard.svg"
            className="w-20 h-20 opacity-70"
            alt=""
          />
        </div>
        <span className="block text-center text-gray-500 mt-2">
          No Purchase Found
        </span>
      </div>
    </div>
  );
};

export default AllPurchase;
