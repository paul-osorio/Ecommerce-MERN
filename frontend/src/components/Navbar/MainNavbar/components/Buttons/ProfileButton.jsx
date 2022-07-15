const ProfileButton = ({ profile }) => {
  return (
    <div
      role="button"
      className="h-10 w-10 rounded-full mx-2 hover:bg-gray-100 laptop:flex mobile:hidden  items-center justify-center"
    >
      <img src={profile} className="rounded-full h-8 w-8" alt="" />
    </div>
  );
};

export default ProfileButton;
