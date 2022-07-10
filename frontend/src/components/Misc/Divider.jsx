const Divider = ({ Title }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full bg-gray-300 h-[1px]" />
      <span className="block w-full text-center text-sm text-gray-600">
        {Title}
      </span>
      <div className="w-full bg-gray-300 h-[1px]" />
    </div>
  );
};

export default Divider;
