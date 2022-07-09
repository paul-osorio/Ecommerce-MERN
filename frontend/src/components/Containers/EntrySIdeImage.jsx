const EntrySideImage = ({ image }) => {
  return (
    <div className="laptop:col-span-1 laptop:flex items-center mobile:hidden">
      <img src={image} alt="" />
    </div>
  );
};

export default EntrySideImage;
