import Select from "react-select";
import { useField } from "formik";

const GridSelect = (props) => {
  const [field, meta, { setValue, setTouched }] = useField(props.field.name);

  const onChange = ({ value }) => {
    setValue(value);
  };

  return (
    <div className="col-span-1">
      <Select {...props} onChange={onChange} onBlur={setTouched} />
    </div>
  );
};

export default GridSelect;
