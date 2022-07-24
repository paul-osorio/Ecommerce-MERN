import { StarRating } from "../../../components/Misc/StarRating";
import Carousel from "../../../components/Modal/ViewProduct/components/Carousel";
import thousandsSeperator from "../../../helper/thousandsSeperator";
import AddToCart from "./AddToCart";
import Carousell from "./Carousell";
import MainCardButtons from "./MainCardButtons";
import Container from "./Container";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getOneCartItem } from "../../../app/lib/cart";
import { useSearchParams } from "react-router-dom";
import { SoldRateCard } from "./Main/SoldRateCart";

const MainCard = ({ data, stars, rating }) => {
  const [quantity, setQuantity] = useState(1);
  const [searchParams] = useSearchParams();
  const cart_id = searchParams.get("id");

  const { data: cart, refetch: refetchCart } = useQuery(["cart"], async () => {
    const res = await getOneCartItem({ item_id: cart_id });
    return res?.data.data;
  });

  return (
    <Container>
      <div className="flex mobile:flex-col tablet:flex-row space-x-2">
        <div className="mobile:block laptop:hidden w-full">
          <Carousel images={data?.images} />
        </div>
        <div className="mobile:hidden laptop:block w-full">
          <Carousell images={data?.images} />
        </div>
        <div className="mt-2 w-full ">
          <div>
            <span className="text-2xl block">{data?.productName}</span>
            <Category category={data?.category} />
            <SoldRateCard stars={stars} rating={rating} />
            <span className="block text-4xl mt-10 text-gray-700">
              ₱ {thousandsSeperator(data?.price)}
            </span>
          </div>

          <div className="mt-10">
            <div className="flex flex-col space-y-5 mt-5">
              <div className="flex space-x-10  items-center">
                <span className="text-sm">Shipping</span>
                <div className="text-sm flex space-x-5">
                  <span>Shipping Fee</span>
                  <span>-</span>
                  <span>P50</span>
                </div>
              </div>
              <div className="flex space-x-10 items-center">
                <span className="text-sm">Quantity</span>
                <AddToCart
                  qty={data?.stock}
                  value={quantity}
                  setValue={setQuantity}
                  data={cart}
                  refetchCart={refetchCart}
                />
              </div>
            </div>

            <MainCardButtons data={cart} qty={data?.stock} value={quantity} />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Category = ({ category }) => {
  return category?.map((category, i) => (
    <span
      role="button"
      key={i}
      className="bg-purple-400 hover:bg-purple-500 text-white text-xs px-2 py-1 rounded-full mr-2"
    >
      {category}
    </span>
  ));
};

export default MainCard;
