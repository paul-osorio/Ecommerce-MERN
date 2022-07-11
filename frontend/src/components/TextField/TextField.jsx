import { useField } from "formik";

const TextField = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <input
      {...field}
      {...props}
      className="w-full border py-2 rounded-lg outline-none text-sm px-4"
    />
  );
};

export default TextField;
