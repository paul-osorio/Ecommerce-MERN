const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  } else {
    return text;
  }
};

export default truncateText;
