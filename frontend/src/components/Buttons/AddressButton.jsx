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
          ? "text-orange-500 font-medium border-b-2 border-b-orange-500"
          : "") +
        " w-full text-sm py-2"
      }
      disabled={!isDisabled}
    >
      {Name}
    </button>
  );
};

export default AddressButton;
