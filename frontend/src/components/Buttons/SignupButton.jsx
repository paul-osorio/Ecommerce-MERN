const SignUpNextButton = ({ name = "Next", isLoading }) => {
  return (
    <button
      type="submit"
      className="bg-purple-700 group hover:bg-purple-800 active:shadow-sm shadow shadow-purple-900 active:translate-y-[2px] flex justify-between items-center py-2 w-full px-5 rounded-full"
    >
      <div />
      <span className="text-white">{!isLoading ? name : "Submitting"}</span>
      {!isLoading && (
        <div className="bg-indigo-200/50 h-8 w-8 flex items-center rounded-full justify-center">
          <i className="fal fa-long-arrow-right text-white"></i>
        </div>
      )}
      {isLoading && (
        <div className="bg-indigo-200/50 h-8 w-8 flex items-center rounded-full justify-center">
          <i class="fas fa-spinner-third text-white animate-spin"></i>
        </div>
      )}
    </button>
  );
};

export default SignUpNextButton;
