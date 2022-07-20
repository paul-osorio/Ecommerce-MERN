import useArrangeAddress from "../../../../hooks/useArrangaAddress";
import useGetUserDetails from "../../../../hooks/useGetUserDetails";
import { Prices } from "../TotalCard";

const MobileMenu = () => {
  const data = useGetUserDetails().user?.addresses[0];
  const address = useArrangeAddress(data);
  return (
    <div className="laptop:hidden sticky bottom-0 px-3">
      <div className="h-44 w-full bg-white  rounded-t-lg shadow-lg shadow-gray-400 px-3">
        <div className="px-5 py-3 flex space-x-5">
          <i className="fad fa-map-marked-alt"></i>
          <p className="text-xs  line-clamp-1">{address}</p>
        </div>
        <hr />
        <div className="px-3 py-2">
          <h4>Order Summary</h4>
          <div className="grid grid-cols-2 gap-x-5 ">
            <div className="col-span-1">
              <Prices Name="Subtotal" Price={300} />
              <Prices Name="Subtotal" Price={300} />
            </div>
            <div className="col-span-1">
              <div className="flex justify-between font-bold  mt-3 mb-3 text-gray-600 ">
                <span className=" ">Total</span>
                <span className="">₱ 1000</span>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 transition active:scale-95 w-full py-2 text-white rounded-full">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
