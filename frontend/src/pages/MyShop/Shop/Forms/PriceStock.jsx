import { Form, Formik } from "formik";
import { useContext } from "react";
import { AddProductContext } from "../../../../context/AddProductContext";
import { PriceStockValidation } from "../../../../validations/AddProductValidation";
import ParcelSizeTextField from "./TextField/ParcelSizeTextField";
import PriceTextField from "./TextField/PriceTextField";

const PriceStock = () => {
  const { setStep, formData, setFormData } = useContext(AddProductContext);
  const onPrev = () => setStep(1);
  const onSubmit = (values) => {
    const data = { ...formData, ...values };
    // setFormData(data);
    console.log(data);
    // setFormData(data);
    // setStep(3);
  };
  return (
    <Formik
      initialValues={{
        price: "",
        stock: "",
        shipping: {
          weight: "",
          length: "",
          width: "",
          height: "",
          fee: "",
        },
      }}
      validationSchema={PriceStockValidation}
      enableReinitialize={true}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div className="p-5 mt-2">
            <h1 className="text-lg mb-2">Price and Stock</h1>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 mb-3 border px-5 py-6 rounded-lg">
              <div className="tablet:col-span-1 mobile:col-span-full">
                <PriceTextField name="price" label="Price" logo="PHP" />
              </div>
              <div className="tablet:col-span-1 mobile:col-span-full">
                <PriceTextField name="stock" label="Stock" />
              </div>
            </div>
            <h1 className="text-lg mb-2">Shipping Details</h1>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 mb-3 border px-5 py-6 rounded-lg">
              <div className="tablet:col-span-1 mobile:col-span-full">
                <PriceTextField
                  name="shipping.weight"
                  label="Weight"
                  logo="KG"
                />
              </div>
              <div className="tablet:col-span-1 mobile:col-span-full">
                <PriceTextField name="shipping.fee" label="Fee" logo="PHP" />
              </div>
              <div className="col-span-full">
                <label className="block text-sm text-gray-500">
                  Parcel Size
                </label>
                <div className="flex space-x-2">
                  <ParcelSizeTextField name="shipping.width" label="cm" />
                  <ParcelSizeTextField name="shipping.length" label="cm" />
                  <ParcelSizeTextField name="shipping.height" label="cm" />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end space-x-3">
              <button
                type="button"
                onClick={onPrev}
                className="bg-gray-100 hover:bg-gray-200 text-gray-600 shadow py-1 px-5 rounded"
              >
                Previous
              </button>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white shadow py-1 px-5 rounded"
              >
                Next
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default PriceStock;
