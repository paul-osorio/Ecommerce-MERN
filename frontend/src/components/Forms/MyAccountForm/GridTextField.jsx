import { useField } from "formik";

const GridTextField = ({ label, Column, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="">
      <label className="block text-sm font-bold text-gray-800">{label}</label>
      <input
        {...props}
        {...field}
        className="focus:ring-inset focus:ring focus:ring-purple-500 transition-all  outline-none text-sm border rounded-lg px-3 py-2 w-full"
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs">
          <i className="far fa-exclamation-circle mx-1"></i>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default GridTextField;
