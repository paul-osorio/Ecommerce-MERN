import { useContext } from "react";
import {
  AddProductContext,
  AddProductProvider,
} from "../../../context/AddProductContext";
import { BasicForm, PriceStock, ProductDescription } from "./Forms";

const AddProductChild = () => {
  const { step } = useContext(AddProductContext);

  let stepContent;

  switch (step) {
    case 1:
      stepContent = <BasicForm />;
      break;
    case 2:
      stepContent = <PriceStock />;
      break;
    case 3:
      stepContent = <ProductDescription />;
      break;
    default:
      break;
  }

  return stepContent;
};

const AddProduct = () => {
  return (
    <AddProductProvider>
      <AddProductChild />
    </AddProductProvider>
  );
};

export default AddProduct;
