import { useField } from "formik";

const ProducTextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="w-full">
      <label className="block text-sm text-gray-500">{label}</label>
      <div className="relative flex items-center">
        <input
          className={
            (meta.touched && meta.error ? "ring-red-500 ring-1" : null) +
            " w-full pr-1 text-sm border px-3 py-2 outline-none focus:ring-1 focus:ring-orange-500 rounded"
          }
          {...props}
          {...field}
        />
        {props.textcounter && (
          <span className="absolute text-sm right-0 px-2 rounded-lg text-gray-500 bg-white">
            {meta.value.length}/100
          </span>
        )}
      </div>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs">
          <i className="far fa-exclamation-circle mx-1"></i>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default ProducTextField;
