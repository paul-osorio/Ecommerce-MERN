const SignUpNextButton = () => {
  return (
    <button
      type="submit"
      className="bg-indigo-600 group hover:bg-indigo-700 active:shadow-sm shadow shadow-indigo-700 active:translate-y-[2px] flex justify-between items-center py-2 w-full px-5 rounded-full"
    >
      <div />
      <span className="text-white">Next</span>
      <div className="bg-indigo-200/50 h-8 w-8 flex items-center rounded-full justify-center">
        <i className="fal fa-long-arrow-right text-white"></i>
      </div>
    </button>
  );
};

export default SignUpNextButton;
