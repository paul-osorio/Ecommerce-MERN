import useArrangeAddress from "../../../hooks/useArrangaAddress";
import useGetUserDetails from "../../../hooks/useGetUserDetails";

const TotalCard = () => {
  const data = useGetUserDetails().user?.addresses[0];
  const address = useArrangeAddress(data);
  return (
    <Container>
      <div className="px-5 py-5 flex space-x-5">
        <i className="fad fa-map-marked-alt"></i>
        <p className="text-xs  line-clamp-2">{address}</p>
      </div>
      <hr />
      <div className="px-5 py-5 w-full">
        <h1 className="mb-3 font-medium">Order Summary</h1>
        <Prices Name="Subtotal" Price={500} />
        <Prices Name="Shipping" Price={500} />
        <div className="flex justify-between font-bold mt-5 mb-5 text-gray-600">
          <span className=" ">Total</span>
          <span className="">₱ 1000</span>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 transition active:scale-95 w-full py-2 text-white rounded-full">
          Check out
        </button>
      </div>
    </Container>
  );
};

const Prices = ({ Name, Price }) => {
  return (
    <>
      <div className="w-full flex items-center my-3 justify-between">
        <span className="text-gray-500 text-sm ">{Name}</span>
        <span className="font-medium text-[15px] text-gray-500">₱ {Price}</span>
      </div>
      <hr />
    </>
  );
};

const Container = ({ children }) => {
  return (
    <div className="tablet:block mobile:hidden w-[45%]">
      <div className=" bg-white shadow rounded-lg">{children}</div>
    </div>
  );
};

export default TotalCard;
