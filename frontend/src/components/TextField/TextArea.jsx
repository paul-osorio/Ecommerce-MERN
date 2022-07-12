import { useField } from "formik";

const TextArea = ({ label, ...props }) => {
  return (
    <div className="relative">
      <textarea
        className="border peer focus:ring-inset transition-all focus:ring-2 focus:ring-indigo-500 text-sm w-full px-3.5 py-2 rounded-lg outline-none placeholder-transparent resize-none"
        {...props}
      ></textarea>
      <label
        className="text-xs text-gray-500 absolute left-2.5 -top-2 bg-white px-2
      peer-placeholder-shown:top-3.5
      peer-placeholder-shown:text-sm
      peer-placeholder-shown:text-gray-400
    peer-focus:left-2.5
    peer-focus:-top-2
    peer-focus:text-indigo-500
    peer-focus:text-xs
    pointer-events-none
    transition-all
    
      "
      >
        {label}
      </label>
    </div>
  );
};
export default TextArea;
