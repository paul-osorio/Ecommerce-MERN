import { useField } from "formik";
import { useContext } from "react";
import { useDropzone } from "react-dropzone";
import { AddProductContext } from "../../context/AddProductContext";

const ProductDropzone = ({ onDrop, images, setImages, ...props }) => {
  const { formData } = useContext(AddProductContext);
  const [field, meta, helpers] = useField("images");
  const { fileRejections, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      accept: {
        "image/*": [],
      },
      onDrop,
      maxFiles: 8,
      maxSize: 3000000,
      multiple: true,
    });
  return (
    <>
      <span className="text-sm text-gray-400">
        Maximum of 8 images can be uploaded and must be atleast 3mb in size.
      </span>
      <div
        {...getRootProps()}
        role="button"
        className={
          "rounded-lg border border-dashed py-10 hover:border-blue-500 " +
          (meta.touched && meta.error ? " border-red-500" : null)
        }
      >
        <ImageGrid
          images={images.length > 0 ? images : formData?.images || []}
          setImages={setImages}
        />
        {formData.images === undefined && images.length <= 0 && (
          <i className="block text-center text-4xl fal text-gray-500 fa-images"></i>
        )}
        <input
          className="input-zone"
          {...getInputProps()}
          disabled={images.length === 8}
        />
        <div className="text-center text-gray-600">
          {isDragActive ? (
            <p className="dropzone-content">Release to drop the files here</p>
          ) : (
            <p className="dropzone-content text-sm">
              Drag and drop your images here or click to select images. (Max 8)
            </p>
          )}
        </div>
      </div>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs">
          <i className="far fa-exclamation-circle mx-1"></i>
          {meta.error}
        </div>
      ) : null}

      {fileRejections.length > 0 && (
        <div className="text-red-500 text-xs">
          <i className="far fa-exclamation-circle mx-1"></i>
          Some images are too large or not supported.
        </div>
      )}
    </>
  );
};

const ImageGrid = ({ images, setImages }) => {
  const { formData, setFormData } = useContext(AddProductContext);

  return (
    <div className="flex justify-center space-x-2">
      {images.map((image) => (
        <div
          key={image.id}
          className="group relative hover:border-blue-500"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <img
            src={URL.createObjectURL(image.file)}
            alt="product"
            className="w-20 h-20  rounded-lg object-cover border"
          />
          <div className="w-full h-full absolute top-2 left-2 opacity-100 ">
            <button
              className="bg-white h-5 rounded-full shadow hover:bg-gray-100 shadow-gray-500 w-5"
              onClick={(e) => {
                setImages((data) => {
                  return data.filter((item) => item.id !== image.id);
                });
                if (formData.images !== undefined) {
                  setFormData((data) => {
                    return {
                      ...data,
                      images: data.images.filter(
                        (item) => item.id !== image.id
                      ),
                    };
                  });
                }
              }}
            >
              <i className=" text-gray-800  fal fa-times"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDropzone;
