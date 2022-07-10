import { useField } from "formik";

const EntryTextField = ({ label, customError, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="mb-2">
      <input
        {...field}
        {...props}
        className="border w-full text-sm py-3 px-4 rounded-lg outline-none"
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
      {customError}
    </div>
  );
};

export default EntryTextField;
