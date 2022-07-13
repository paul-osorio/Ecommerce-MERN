import Select from "react-select";
import { useField } from "formik";

const SelectDropdown = (props) => {
  const [field, meta, { setValue, setTouched }] = useField(props.field.name);

  const onChange = ({ value }) => {
    setValue(value);
  };

  return <Select {...props} onChange={onChange} onBlur={setTouched} />;
};

export default SelectDropdown;
