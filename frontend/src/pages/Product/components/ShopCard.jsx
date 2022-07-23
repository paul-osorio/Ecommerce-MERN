import ImageHolder from "../../../components/Misc/ImageHolder";
import placeholderImg from "../../../assets/images/placeholder.png";
import { useQuery } from "@tanstack/react-query";
import { getShopById } from "../../../app/lib/shop";
import Container from "./Container";

const ShopCard = ({ shopID }) => {
  const { isLoading, data, error } = useQuery(
    ["shopDetails", shopID],
    async () => {
      const response = await getShopById(shopID);
      return response.data;
    }
  );

  const imageUrl =
    import.meta.env.VITE_APP_BASE_URL + "shop/" + data?.shop_profile;

  if (isLoading) {
    return (
      <Container>
        <div className="text-center">Loading...</div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 w-full">
          <ImageHolder
            src={imageUrl}
            placeholderImg={placeholderImg}
            className="h-20 w-20 rounded-full object-cover"
          />
          <div>
            <span className="text block">{data?.shop_name}</span>
            <div className="flex space-x-5">
              <button className=" px-2 py-1 rounded text-gay-700 bg-gray-200 shadow shadow-gray-400">
                <i className="fad text-sm fa-store mr-2"></i>
                <span className="text-sm">View Shop</span>
              </button>
              <button className="text-purple-700 hover:text-purple-800">
                <i className="fas fa-comments-alt mr-2"></i>
                <span className=" ">Chat</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-around w-full space-x-4">
          <div className="flex flex-col  items-center">
            <span className="block">Seller Rating</span>
            <span className="block text-xl text-orange-600">93%</span>
          </div>
          <div className="flex flex-col  items-center">
            <span className="block">Products</span>
            <span className="block text-xl text-orange-600">242</span>
          </div>
          <div className="flex flex-col  items-center">
            <span className="block">Follower</span>
            <span className="block text-xl text-orange-600">242</span>
          </div>
          <div className="flex flex-col  items-center">
            <span className="block">Response Rate</span>
            <span className="block text-xl text-orange-600">50%</span>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ShopCard;
