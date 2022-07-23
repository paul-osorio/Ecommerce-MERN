import { useState } from "react";

const LikeComment = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="flex space-x-2 items-center mt-1">
      <button
        onClick={() => {
          setLiked(!liked);
        }}
      >
        {!liked ? (
          <i className="fal fa-thumbs-up"></i>
        ) : (
          <i className="fas text-purple-600 fa-thumbs-up"></i>
        )}
      </button>
      <span>0</span>
    </div>
  );
};

export default LikeComment;
