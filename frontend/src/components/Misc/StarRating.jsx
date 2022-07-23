export const StarRating = ({ rating, className }) => {
  //get whole number

  const whole = Math.floor(rating);
  const decimal = rating - whole;
  const hasDecimal = decimal > 0;

  const decimalGreaterThan5 = decimal > 0.5;
  //count remainting stars
  const remaining = hasDecimal ? 5 - whole - 1 : 5 - whole;

  return (
    <div className={" space-x-0.5 " + className}>
      {[...Array(whole)].map((_, i) => (
        <i className="fas fa-star" key={i}></i>
      ))}
      {hasDecimal ? (
        decimalGreaterThan5 ? (
          <i className="fas fa-star"></i>
        ) : (
          <i className="fas fa-star-half-alt"></i>
        )
      ) : null}

      {[...Array(remaining)].map((_, i) => (
        <i className="far fa-star" key={i}></i>
      ))}
    </div>
  );
};
