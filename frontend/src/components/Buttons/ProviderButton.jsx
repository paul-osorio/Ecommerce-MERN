const ProviderButton = ({ onClick, Name, Image }) => {
  return (
    <button
      className="border px-3 rounded py-2 w-full flex items-center justify-center space-x-1"
      onClick={onClick}
    >
      <img src={Image} className="h-4 w-4" alt="" />
      <span className="text-sm font-medium">{Name}</span>
    </button>
  );
};
export default ProviderButton;
