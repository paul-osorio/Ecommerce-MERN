import EditorDescription from "./TextField/EditorDescription";
import { convertFromRaw } from "draft-js";

import "draft-js/dist/Draft.css";
import { EditorProvider } from "../../../../context/EditorContext";
import { Form, Formik } from "formik";
import { useContext, useRef, useState } from "react";
import { AddProductContext } from "../../../../context/AddProductContext";

const ProductDescription = () => {
  const { formData, setFormData, setStep } = useContext(AddProductContext);
  const [error, setError] = useState("");
  const ref = useRef(null);

  const onPrev = () => {
    const values = ref.current.values;

    const data = { ...formData, ...values };
    setFormData(data);
    setStep(2);
  };
  const onSubmit = (values) => {
    const fromRaw = convertFromRaw(values.description);
    if (fromRaw.getPlainText().length > 0) {
      console.log("jo");
    } else {
      setError("Please write your product description");
    }
  };
  return (
    <EditorProvider>
      <Formik
        innerRef={ref}
        initialValues={{
          description: formData?.description || "",
        }}
        validateOnBlur={false}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <h1 className="mt-3 text-lg mb-2 text-gray-500 font-medium">
              Product Description
            </h1>{" "}
            <EditorDescription
              setFieldValue={setFieldValue}
              setError={setError}
            />
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <div className="w-full justify-end flex space-x-2 mt-2">
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
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </EditorProvider>
  );
};

export default ProductDescription;
