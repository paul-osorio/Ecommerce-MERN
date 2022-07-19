import { useField } from "formik";
import { numberOnly } from "../../../../../helper/numberOnly";

const PriceTextField = (props) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div>
      <div
        className={
          "w-full flex items-center  rounded-lg " +
          (meta.touched && meta.error ? "ring-1 ring-red-500 " : null)
        }
      >
        <div className=" bg-slate-700 flex items-center px-5 h-10 rounded-l-lg">
          <label className="block text-white text-sm">{props.label}</label>
        </div>
        <input
          {...props}
          {...field}
          className={
            "w-full outline-none border h-10 px-3 " +
            (!props.logo && "rounded-r-lg")
          }
          type="text"
          placeholder="0"
          onKeyPress={numberOnly}
        />
        {props.logo && (
          <div className="bg-gray-200 flex items-center h-10 px-3 rounded-r-lg">
            <label className="text-gray-600 text-sm">{props.logo}</label>
          </div>
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

export default PriceTextField;
