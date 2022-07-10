const EntryTextField = ({ placeholder }) => {
  return (
    <div className="mb-2">
      <input
        type="text"
        placeholder={placeholder}
        className="border w-full text-sm py-3 px-4 rounded-lg outline-none"
      />
    </div>
  );
};

export default EntryTextField;
