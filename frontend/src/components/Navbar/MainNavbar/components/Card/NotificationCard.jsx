import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import truncateText from "../../../../../helper/truncateText";

export const NotifCard = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.2 }}
      className="z-50 absolute w-72 tablet:right-0 mobile:-right-10 bg-white shadow shadow-gray-300 rounded-xl"
    >
      <div className="w-full rounded-t-xl text-gray-500 text-sm bg-gray-50 p-2 py-3">
        Recent Notifications
      </div>
      {/* <NoNotifMessage /> */}
      <div className="max-h-[300px] overflow-auto newscrollbar py-2">
        <NotifMessageCard Message="Lorem ipsum dolor sit amet consectetur asfasfasa dipisicing elit.Repudiandae,asfasfasf" />
        <NotifMessageCard Message="Lorem ipsum dolor sit amet consectetur asfasfasadipisicing elit.Repudiandae,asfasfasf" />
        <NotifMessageCard Message="Lorem ipsum dolor sit amet consectetur asfasfasadipisicing elit.Repudiandae,asfasfasf" />
        <NotifMessageCard Message="Lorem ipsum dolor sit amet consectetur asfasfasadip isicing elit.Repudiandae,asfasfasf" />
        <NotifMessageCard Message="Lorem ipsum dolor sit amet consectetur asfasfasadipisicing elit.Repudiandae,asfasfasf" />
        <NotifMessageCard Message="Lorem ipsum dolor sit amet consectetur asfasfasadipisicing elit.Repudiandae,asfasfasf" />
        <NotifMessageCard Message="Lorem ipsum dolor sit amet consectetur asfasfasadipisicing elit.Repudiandae,asfasfasf" />
        <NotifMessageCard Message="Lorem ipsum dolor sit amet consectetur asfasfasadipisicing elit.Repudiandae,asfasfasf" />
      </div>
      {/* <NoNotifMessage /> */}
      <SeeAllLink onClick={onClose} />
    </motion.div>
  );
};

const NotifMessageCard = ({ Message }) => {
  return (
    <div className="px-2">
      <div
        className="w-full flex rounded-lg p-2 items-center hover:bg-gray-100"
        role="button"
      >
        <div className="mr-3">
          <div className="h-10 w-10 bg-red-500 rounded"></div>
        </div>
        <div className="w-full h-18 ">
          <span className="text-sm font-medium">Title</span>
          <p className="text-xs text-gray-500">{truncateText(Message, 55)}</p>
        </div>
      </div>
    </div>
  );
};

const NoNotifMessage = () => {
  return (
    <div className="p-2 py-3 bg-white">
      <div className="w-full flex justify-center">
        <img
          src="https://www.svgrepo.com/show/193433/notification.svg"
          className="h-10 w-10 opacity-80"
          alt=""
        />
      </div>
      <span className="block text-center text-sm text-gray-500">
        No Notifications Yet
      </span>
    </div>
  );
};

const SeeAllLink = ({ onClick }) => {
  return (
    <div className="">
      <div className="w-full text-gray-500 text-sm text-center bg-gray-50 rounded-b-xl p-2">
        <Link
          onClick={onClick}
          to="/notifications"
          className="hover:text-purple-500 hover:border-b hover:border-b-purple-500 transition"
        >
          See all
        </Link>
      </div>
    </div>
  );
};
