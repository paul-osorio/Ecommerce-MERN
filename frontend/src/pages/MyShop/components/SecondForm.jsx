import { useRef, useState } from "react";
import { useMyShop } from "../../../context/MyShopContext";
import { NextButton } from "./FirstForm";

const SecondForm = () => {
  const {
    setStep,
    profile,
    setProfile,
    setProfileName,
    setBannerName,
    bannerName,
    profileName,
    banner,
    setBanner,
  } = useMyShop();
  const profileRef = useRef();
  const bannerRef = useRef();
  const [error, setError] = useState("");

  const onPrev = () => {
    setStep(1);
  };
  const onNext = () => {
    if (!banner) {
      setError("Please add a banner");
    } else if (!profile) {
      setError("Please add a store profile picture");
    } else {
      setStep(3);
    }
  };
  const profileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfile(event.target.files[0]);
      setProfileName(URL.createObjectURL(event.target.files[0]));
      setError("");
    }
  };
  const bannerChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setBanner(event.target.files[0]);
      setBannerName(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div>
      <input
        ref={profileRef}
        type="file"
        onChange={profileChange}
        multiple={false}
        accept="image/*"
        hidden
      />
      <input
        ref={bannerRef}
        type="file"
        onChange={bannerChange}
        multiple={false}
        accept="image/*"
        hidden
      />
      <label className="block text-sm text-gray-700">
        Create your store name <span className="text-red-500">*</span>
      </label>

      <div className="w-full relative">
        <Banner
          Banner={bannerName}
          onClick={() => {
            bannerRef.current.click();
          }}
        />
        <Profile
          Picture={profileName}
          onClick={() => {
            profileRef.current.click();
          }}
        />
      </div>
      {error && (
        <div className="text-red-500 text-xs mt-3">
          <i className="far fa-exclamation-circle mx-1"></i>
          {error}
        </div>
      )}
      <div className="w-full flex justify-end space-x-2">
        <PreviousButton onClick={onPrev} />
        <NextButton onClick={onNext} />
      </div>
    </div>
  );
};

const Banner = ({ onClick, Banner }) => {
  return (
    <div className="h-24 w-full bg-gray-400 rounded-lg hover:ring-2 relative">
      <img src={Banner} alt="" className="w-full h-full object-cover" />
      <div
        role="button"
        onClick={onClick}
        className="bg-blue-500 hover:ring-2 rounded-full text-white px-3 py-1 absolute bottom-2 right-2 text-xs"
      >
        Add Banner
      </div>
    </div>
  );
};

const Profile = ({ Picture, onClick }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className="w-16 h-16 group hover:ring-indigo-500 transition bg-blue-500  ring-4 ring-white rounded-full absolute -bottom-2 left-5"
    >
      <div className="w-full h-full relative">
        <img
          src={Picture}
          className="object-cover h-16 w-16 rounded-full"
          alt=""
        />
        <div className="absolute transition-all text-indigo-500 -bottom-2 right-0">
          <div className="bg-white rounded-full h-6 w-6 flex items-center justify-center">
            <i className="fad fa-plus-circle text-[24px] rounded-full"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PreviousButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-5 py-1 rounded-full text-gray-600 hover:text-black mt-2"
    >
      Previous
    </button>
  );
};

export default SecondForm;
