import { Form, Formik } from "formik";
import { useContext } from "react";
import AddProductFileField from "../../../../components/TextField/AddProductTextField";
import { AddProductContext } from "../../../../context/AddProductContext";
import useGetCategories from "../../../../hooks/useGetCategories";
import { BasicValidation } from "../../../../validations/AddProductValidation";
import MultiSelectDropdown from "./TextField/MultiSelectDropdown";
import ProducTextField from "./TextField/ProductTextField";

const BasicForm = () => {
  const { setStep, formData, setFormData } = useContext(AddProductContext);
  const categories = useGetCategories();

  const onSubmit = (values) => {
    const data = { ...formData, ...values };
    setFormData(data);
    setStep(2);
  };
  console.log(formData);

  return (
    <Formik
      initialValues={{
        images: formData?.images || "",
        productName: formData.productName || "",
        productCategory: formData.productCategory || "",
      }}
      validationSchema={BasicValidation}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div className=" p-5  mt-2">
            <h1 className="text-lg mb-2">Basic Information</h1>
            <h1 className="text-sm text-gray-500">Product Images</h1>

            <AddProductFileField
              values={values.images}
              setFieldValue={setFieldValue}
            />
            <div className="mb-2" />
            <ProducTextField
              type="text"
              name="productName"
              placeholder="Enter your product name"
              label="Product Name"
              autoComplete="off"
              textcounter="true"
              maxLength={100}
            />

            <div className="mb-2" />
            <MultiSelectDropdown
              defaultValue={values.productCategory}
              name="productCategory"
              options={categories}
              label="Product Categories"
              description="Maximum of 3 categories and minimum of 1 category"
              placeholder="Select your product categories"
            />
            <div className="mt-2 flex justify-end">
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

export default BasicForm;
