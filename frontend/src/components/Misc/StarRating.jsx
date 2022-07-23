export const StarRating = ({ rating, className }) => {
  //get whole number

  const whole = Math.floor(rating);
  const hasDecimal = rating % 1 !== 0;
  const remainingStars = hasDecimal ? 5 - whole - 1 : 5 - whole;

  //round up decimal
  const decimal = hasDecimal ? Math.round(rating * 10) % 10 : 0;
  const isDecimalGreaterThan5 = decimal > 5;

  return (
    <div className={" space-x-0.5 " + className}>
      {[...Array(whole)].map((_, i) => (
        <i className="fas fa-star"></i>
      ))}
      {hasDecimal && isDecimalGreaterThan5 ? (
        <i className="fas fa-star"></i>
      ) : (
        <i className="fas fa-star-half-alt"></i>
      )}
      {[...Array(remainingStars)].map((_, i) => (
        <i className="far fa-star"></i>
      ))}
    </div>
  );
};
