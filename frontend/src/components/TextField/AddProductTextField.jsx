import { useContext, useState, useEffect } from "react";
import ProductDropzone from "./ProductDropzone";
import cuid from "cuid";
import { AddProductContext } from "../../context/AddProductContext";

const AddProductFileField = (props) => {
  const { formData, setFormData } = useContext(AddProductContext);
  const [images, setImages] = useState([]);
  const { setFieldValue } = props;
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length <= 8) {
      acceptedFiles.map((file) => {
        if (file.size <= 3000000) {
          setImages((prevImages) => [
            ...prevImages,
            {
              id: cuid(),
              file: file,
            },
          ]);
        }
      });
    }
  };

  useEffect(() => {
    if (formData.images === undefined || formData.images.length === 0) {
      setFieldValue("images", images);
    }
  }, [images]);

  return (
    <ProductDropzone onDrop={onDrop} setImages={setImages} images={images} />
  );
};
export default AddProductFileField;
