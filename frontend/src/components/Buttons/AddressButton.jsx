const AddressButton = ({
  Name,
  isActive,
  setActive,
  activeVal,
  isDisabled,
}) => {
  return (
    <button
      type="button"
      onClick={() => setActive(activeVal)}
      className={
        (!isDisabled && "cursor-not-allowed") +
        (isActive
          ? " text-indigo-500 font-medium border-b-2 border-b-indigo-500"
          : " border-b-2 border-b-white") +
        " w-full text-sm py-2 transition "
      }
      disabled={!isDisabled}
    >
      {Name}
    </button>
  );
};

export default AddressButton;
