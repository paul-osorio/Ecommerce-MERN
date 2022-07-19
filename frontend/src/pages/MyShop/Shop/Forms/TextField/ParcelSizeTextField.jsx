import { useField } from "formik";
import { numberOnly } from "../../../../../helper/numberOnly";

const ParcelSizeTextField = (props) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div>
      <div
        className={
          "w-full flex items-center rounded-lg " +
          (meta.touched && meta.error ? "ring-1 ring-red-500 " : null)
        }
      >
        <input
          {...props}
          {...field}
          className={"w-full outline-none border h-10 px-3 rounded-l-lg"}
          placeholder="0"
          type="text"
          onKeyPress={numberOnly}
        />
        <div className="bg-gray-200 flex items-center h-10 px-3 rounded-r-lg">
          <label className="text-gray-600 text-sm">{props.label}</label>
        </div>
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

export default ParcelSizeTextField;
