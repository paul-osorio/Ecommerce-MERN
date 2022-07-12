export const SelectAddressButton = ({ name, onClick, isSelected }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className={
        (isSelected ? "bg-orange-300" : "hover:bg-gray-50") +
        " py-3 border-b px-2  text-xs normal-case"
      }
    >
      {name}
    </div>
  );
};
