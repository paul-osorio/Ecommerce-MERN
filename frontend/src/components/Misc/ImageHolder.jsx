import { useState, useCallback, useEffect } from "react";

const ImageHolder = ({ placeholderImg, src, ...props }) => {
  const [imgSrc, setSrc] = useState(placeholderImg || src);

  const onLoad = useCallback(() => {
    setSrc(src);
  }, [src]);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.addEventListener("load", onLoad);

    return () => {
      img.removeEventListener("load", onLoad);
    };
  }, [src, onLoad]);

  return <img {...props} src={imgSrc} alt={imgSrc} />;
};

export default ImageHolder;
