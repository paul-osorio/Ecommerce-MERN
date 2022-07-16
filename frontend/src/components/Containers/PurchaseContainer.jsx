const PurchaseContainer = ({ children }) => {
  return (
    <div className="w-full px-3 py-3">
      <div className="w-full border min-h-[300px] max-h-[400px] overflow-auto rounded-xl">
        {children}
      </div>
    </div>
  );
};

export default PurchaseContainer;
