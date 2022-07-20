const PurchaseCard = ({ Shop, Status }) => {
  return (
    <div className="border rounded-lg mb-3 h-32">
      <div className="flex justify-between py-2 px-3 border-b">
        <div className="flex items-center space-x-2">
          <i className="fad fa-store"></i>
          <span className="text-gray-600 text-sm font-medium">{Shop}</span>
        </div>
        <div className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
          {Status}
        </div>
      </div>
      <div className="py-2 px-3">
        <div className="flex space-x-5">
          <div className="h-16 w-16 bg-red-500"></div>
          <span className="w-1/3 text-sm">
            Example Product Name asfas fas fs af
          </span>
          <div className="tablet:pl-10 ">
            <span className="text-gray-600">$10.00</span>
          </div>
          <div className="tablet:pl-10 ">
            <span className="text-gray-600">Qty: 1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
