const PurchaseContainer = ({ children }) => {
  return (
    <div className="w-full px-3 py-3">
      <div className="w-full min-h-[300px] overflow-auto grayscrollbar">
        {children}
      </div>
    </div>
  );
};

export default PurchaseContainer;
