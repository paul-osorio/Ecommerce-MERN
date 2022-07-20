import { RichUtils } from "draft-js";
import { useContext, useState } from "react";
import { EditorContext } from "../../../../context/EditorContext";

const EditorStyling = ({ onChange }) => {
  const { setAlignmentType, editorState } = useContext(EditorContext);

  const _onBoldClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };
  const _onItalicClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };
  const _onUnderlineClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  };

  const _onUnorderedListClick = () => {
    onChange(RichUtils.toggleBlockType(editorState, "unordered-list-item"));
  };
  const _onOrderedListClick = () => {
    onChange(RichUtils.toggleBlockType(editorState, "ordered-list-item"));
  };

  const onAlignRightClick = () => {
    setAlignmentType("right");
  };
  const onAlignLeftClick = () => {
    setAlignmentType("left");
  };
  const onAlignCenterClick = () => {
    setAlignmentType("center");
  };

  return (
    <div className="w-full flex justify-center py-2 bg-gray-100 rounded-t-lg shadow-inner">
      <div className="flex  py-1 justify-around  mobile:w-full tablet:w-1/2  rounded2">
        <EditorButton
          onMouseDown={_onBoldClick}
          Name={<i className="far fa-bold"></i>}
        />
        <EditorButton
          onMouseDown={_onItalicClick}
          Name={<i className="far fa-italic"></i>}
        />
        <EditorButton
          onMouseDown={_onUnderlineClick}
          Name={<i className="far fa-underline"></i>}
        />
        <EditorButton
          onMouseDown={_onUnorderedListClick}
          Name={<i className="far fa-list"></i>}
        />
        <EditorButton
          onMouseDown={_onOrderedListClick}
          Name={<i className="far fa-list-ol"></i>}
        />
        <EditorButton
          onMouseDown={onAlignLeftClick}
          Name={<i className="far fa-align-left"></i>}
        />
        <EditorButton
          onMouseDown={onAlignCenterClick}
          Name={<i className="far fa-align-center"></i>}
        />
        <EditorButton
          onMouseDown={onAlignRightClick}
          Name={<i className="far fa-align-right"></i>}
        />
      </div>
    </div>
  );
};

const EditorButton = ({ onMouseDown, Name }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      onMouseDown={(e) => {
        e.preventDefault();
        onMouseDown();
        setIsActive(!isActive);
      }}
      type="button"
      className="h-8 w-8 transition  active:bg-indigo-200 shadow hover:bg-indigo-100 bg-white text-gray-800 rounded"
    >
      {Name}
    </button>
  );
};

export default EditorStyling;
