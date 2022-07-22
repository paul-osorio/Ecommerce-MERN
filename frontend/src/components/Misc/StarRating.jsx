export const StarRating = ({ rating, size }) => {
  //get whole number

  const whole = Math.floor(rating);
  const hasDecimal = rating % 1 !== 0;
  const remainingStars = hasDecimal ? 5 - whole - 1 : 5 - whole;

  return (
    <div className={" space-x-0.5 text-yellow-500 " + size}>
      {[...Array(whole)].map((_, i) => (
        <i className="fas fa-star" key={i}></i>
      ))}
      {hasDecimal && <i className="fad fa-star-half-alt"></i>}
      {[...Array(remainingStars)].map((_, i) => (
        <i className="fal fa-star" key={i}></i>
      ))}
    </div>
  );
};
