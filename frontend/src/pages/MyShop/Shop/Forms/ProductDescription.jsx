import EditorDescription from "./TextField/EditorDescription";
import { convertFromRaw, convertToRaw, convertFromHTML } from "draft-js";
import draftToHtml from "draftjs-to-html";

import "draft-js/dist/Draft.css";
import { EditorProvider } from "../../../../context/EditorContext";
import { Form, Formik } from "formik";
import { useContext, useRef, useState } from "react";
import { AddProductContext } from "../../../../context/AddProductContext";
import { createProduct } from "../../../../app/lib/product";

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
  const onSubmit = async (values) => {
    const fromRaw = convertFromRaw(values.description);
    //filter images from formdata?.images

    if (fromRaw.getPlainText().length > 0) {
      const fd = new FormData();
      fd.append("productName", formData?.productName);
      fd.append("category", JSON.stringify(formData?.productCategory));
      fd.append("price", formData?.price);
      fd.append("stock", formData?.stock);
      fd.append("shipping", JSON.stringify(formData?.shipping));
      fd.append("description", draftToHtml(values.description));
      const img = formData?.images.length;
      for (let i = 0; i < img; i++) {
        fd.append("product_images", formData?.images[i].file);
      }

      try {
        await createProduct(fd);
        alert("Product created");
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
      console.log(...fd);
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
