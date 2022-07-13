const EntrySideImage = ({ image, className }) => {
  return (
    <div className="laptop:col-span-1 laptop:flex items-center mobile:hidden">
      <img src={image} className={className} alt="" />
    </div>
  );
};

export default EntrySideImage;
