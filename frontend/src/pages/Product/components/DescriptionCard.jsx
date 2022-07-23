import { ContentState, EditorState, Editor, convertFromHTML } from "draft-js";
import { useRef, useState, useEffect } from "react";
import Container from "./Container";

const DescriptionCard = ({ description }) => {
  const ref = useRef(null);

  const [height, setHeight] = useState(null);
  const [defHeight, setDefHeight] = useState(false);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  const des = convertFromHTML(description || "");

  const state = ContentState.createFromBlockArray(
    des.contentBlocks,
    des.entityMap
  );
  const editorState = EditorState.createWithContent(state);
  return (
    <Container>
      <div className="bg-gray-100 p-2 rounded">Product Description</div>
      <div
        ref={ref}
        className={
          "p-2 overflow-hidden " +
          (defHeight ? "h-auto" : height > 300 && "h-52")
        }
      >
        <Editor editorState={editorState} readOnly={true} />
      </div>
      {!defHeight ? (
        height > 300 && (
          <div className="flex justify-center">
            <button
              onClick={() => {
                setDefHeight(true);
              }}
              className="border  border-purple-500 hover:bg-purple-500 hover:text-white text-purple-500 px-3 py-1"
            >
              View More
            </button>
          </div>
        )
      ) : (
        <div className="flex justify-center">
          <button
            onClick={() => {
              setDefHeight(false);
            }}
            className="border  border-purple-500 hover:bg-purple-500 hover:text-white text-purple-500 px-3 py-1"
          >
            View Less
          </button>
        </div>
      )}
    </Container>
  );
};

export default DescriptionCard;
