export const ControlButton = ({ type, setPage, page, res }) => {
  const className =
    "bg-indigo-600 shadow disabled:bg-indigo-400 hover:bg-indigo-700  text-white h-6 w-6 active:scale-95 rounded-full flex items-center justify-center";

  if (type === 1) {
    return (
      <button
        className={className}
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
        disabled={page === 1}
      >
        <i className="fas fa-angle-left"></i>
      </button>
    );
  } else {
    return (
      <button
        className={className}
        onClick={() => {
          if (page < res.info.totalPages) {
            setPage(page + 1);
          }
        }}
        disabled={page === res.info.totalPages}
      >
        <i className="fas fa-angle-right"></i>
      </button>
    );
  }
};
