import { useField } from "formik";
import { useState } from "react";

const PasswordTextField = ({ label, customError, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [field, meta, helpers] = useField(props);
  return (
    <div className="mb-4 relative w-full">
      <input
        type={showPassword ? "text" : "password"}
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
      <button
        className="absolute top-3 right-3 group outline-none"
        tabIndex={-1}
        type="button"
        onClick={() => setShowPassword(!showPassword)}
      >
        {!showPassword ? (
          <i class="fad fa-eye-slash group-hover:text-gray-700"></i>
        ) : (
          <i class="fad fa-eye group-hover:text-gray-700"></i>
        )}
      </button>
    </div>
  );
};

export default PasswordTextField;
