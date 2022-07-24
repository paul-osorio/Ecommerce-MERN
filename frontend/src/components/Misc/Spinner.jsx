export const Spinner = () => {
  return (
    <div
      role="status"
      className="w-full flex flex-col items-center justify-center"
    >
      <i className="fas text-purple-500 text-2xl fa-spinner block animate-spin"></i>
      <span className="text-xs">Loading...</span>
    </div>
  );
};
