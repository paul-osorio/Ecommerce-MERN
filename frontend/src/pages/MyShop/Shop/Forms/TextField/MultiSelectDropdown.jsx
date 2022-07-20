import Select from "react-select";
import { useState } from "react";
import { useField } from "formik";

const MultiSelectDropdown = (props) => {
  const [field, meta, { setValue, setTouched }] = useField(props);
  const [options, setOptions] = useState([]);

  const onChange = (value) => {
    setValue(value);
    setOptions(value);
  };

  return (
    <div>
      <label className="block text-sm text-gray-500">{props.label}</label>

      <Select
        {...props}
        isMulti
        onChange={onChange}
        isOptionDisabled={() => options.length >= 3}
        onBlur={setTouched}
        className={
          "text-sm rounded " +
          (meta.touched && meta.error ? " border border-red-500" : null)
        }
      />
      {props.description ? (
        <div className="text-gray-400 text-sm">
          <i className="fad fa-info-square mx-1"></i> {props.description}
        </div>
      ) : null}
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs">
          <i className="far fa-exclamation-circle mx-1"></i>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default MultiSelectDropdown;
