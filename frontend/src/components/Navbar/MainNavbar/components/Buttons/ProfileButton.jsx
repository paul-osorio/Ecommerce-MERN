import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../../../../../app/lib/user";
import ImageHolder from "../../../../Misc/ImageHolder";
import placeholderImg from "../../../../../assets/images/placeholder.png";

const ProfileButton = () => {
  const { data: profile } = useQuery(["userprofile"], async () => {
    const user = await getUserDetails();
    return user.data.profilePicture;
  });

  return (
    <div
      role="button"
      className="h-10 w-10 rounded-full mx-2 hover:bg-gray-100 laptop:flex mobile:hidden  items-center justify-center"
    >
      <ImageHolder
        src={profile}
        placeholderImg={placeholderImg}
        className="rounded-full h-8 w-8"
      />
    </div>
  );
};

export default ProfileButton;
