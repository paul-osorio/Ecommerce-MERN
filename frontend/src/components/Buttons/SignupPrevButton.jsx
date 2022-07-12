const SignUpPrevButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-white relative group first-line:flex justify-between items-center py-2 w-full pl-5 rounded-full transition-all"
    >
      <div className="bg-indigo-200/50 transition-all h-8 w-8 flex items-center rounded-full justify-center absolute top-2 group-active:left-4">
        <i className="fal fa-long-arrow-left text-gray-800"></i>
      </div>
      <span className="text-gray-800">Previous</span>
      <div />
    </button>
  );
};
export default SignUpPrevButton;
