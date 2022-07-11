import { useField } from "formik";

const EntryTextField = ({ label, customError, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="mb-4 relative w-full">
      <input
        {...field}
        {...props}
        autoComplete="off"
        className="border mb-1 focus:ring-indigo-400 focus:ring-inset focus:ring-2 peer placeholder-transparent w-full text-sm py-3 px-4 rounded-lg outline-none"
      />
      <label
        className="
        pointer-events-none
        absolute
        -top-2
        left-2.5
        text-xs
        bg-white
        px-2
        text-gray-500
        transition-all
        peer-placeholder-shown:top-3.5
        peer-placeholder-shown:left-4
        peer-placeholder-shown:text-sm
        peer-placeholder-shown:text-gray-400
        peer-focus:left-2.5
        peer-focus:-top-2
        peer-focus:text-xs
        peer-focus:bg-white
        peer-focus:px-2
        peer-focus:text-indigo-500
      
      "
      >
        {label}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs">
          <i className="far fa-exclamation-circle mx-1"></i>
          {meta.error}
        </div>
      ) : null}
      {customError && (
        <div className="text-red-500 text-xs">
          <i className="far fa-exclamation-circle mx-1"></i>
          {customError}
        </div>
      )}
    </div>
  );
};

export default EntryTextField;
