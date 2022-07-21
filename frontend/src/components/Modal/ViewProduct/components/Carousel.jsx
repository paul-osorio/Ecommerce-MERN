import { useEffect, useState } from "react";
import ImageHolder from "../../../Misc/ImageHolder";
import placeholderImg from "../../../../assets/images/placeholder.png";
import { paginateArray } from "../../../../helper/paginateArray";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPage = paginateArray(images, 5);
  const geturi = import.meta.env.VITE_APP_BASE_URL;

  const mainImage = geturi + "product_images/" + currentImage;

  useEffect(() => {
    setCurrentImage(images?.[0]);
  }, [images]);

  const nextPage = () => {
    if (images?.length === 8) {
      if (currentPage === 0) {
        setCurrentPage(currentPage + 1);
      }
    }
  };
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-[22rem]">
      <div className="h-[22rem] w-full bg-white mb-2 relative">
        <ImageHolder
          src={mainImage}
          placeholderImg={placeholderImg}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-16">
        <div className="flex space-x-2 w-full mt-2">
          {imagesPage[currentPage]?.map((image, i) => (
            <ChildCard
              src={image}
              key={i}
              onClick={() => {
                setCurrentImage(image);
              }}
            />
          ))}
        </div>
        {currentPage > 0 && <ControlButton Type="Prev" onClick={prevPage} />}
        {imagesPage?.length > 1 && (
          <ControlButton Type="Next" onClick={nextPage} />
        )}
      </div>
    </div>
  );
};

const ControlButton = ({ onClick, Type }) => {
  if (Type == "Next") {
    return (
      <button
        onClick={onClick}
        className="h-full absolute right-0 top-0 px-2 hover:bg-black/20"
      >
        <i class="fas fa-angle-right"></i>
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className="h-full absolute left-0 top-0 px-2 hover:bg-black/20"
      >
        <i class="fas fa-angle-left"></i>
      </button>
    );
  }
};

const ChildCard = ({ src, onClick }) => {
  const geturi = import.meta.env.VITE_APP_BASE_URL;

  const imgsrc = geturi + "product_images/" + src;
  return (
    <div
      role="button"
      className="group bg-white border relative  w-16 h-16 flex items-center justify-center"
      onClick={onClick}
    >
      <ImageHolder
        src={imgsrc}
        placeholderImg={placeholderImg}
        className="object-cover h-full w-full"
      />

      <div className="h-full w-full bg-black/10 absolute group-hover:opacity-100 opacity-0"></div>
    </div>
  );
};

export default Carousel;
