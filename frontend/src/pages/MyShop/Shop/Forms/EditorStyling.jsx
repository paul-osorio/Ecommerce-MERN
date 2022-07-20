import { RichUtils } from "draft-js";
import { useContext, useState } from "react";
import ReactSelect from "react-select";
import { EditorContext } from "../../../../context/EditorContext";

const EditorStyling = ({ onChange }) => {
  const { setAlignmentType, editorState } = useContext(EditorContext);

  const options = [
    { value: "Default", label: "Default" },
    {
      value: "header-one",
      label: "Header 1",
    },
    {
      value: "header-two",
      label: "Header 2",
    },
    {
      value: "header-three",
      label: "Header 3",
    },
    {
      value: "header-four",
      label: "Header 4",
    },
    {
      value: "header-five",
      label: "Header 5",
    },
    {
      value: "header-six",
      label: "Header 6",
    },
  ];

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

  const onSelectChange = (selectedOption) => {
    onChange(RichUtils.toggleBlockType(editorState, selectedOption.value));
  };

  return (
    <div className="w-full flex justify-center py-2 bg-gray-100 rounded-t-lg ">
      <div className="grid grid-cols-3 gap-x-5 w-full px-5  py-1">
        <div className="tablet:col-span-1 mobile:col-span-full">
          <ReactSelect
            defaultValue={options[0]}
            onChange={onSelectChange}
            options={options}
            placeholder="Select Header"
            className="z-10"
          />
        </div>
        <div className="tablet:col-span-2  mobile:col-span-full">
          <div className="tablet:grid tablet:grid-cols-8 w-full mobile:space-x-1 mobile:mt-2 tablet:mt-0 mobile:flex mobile:justify-center">
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
      </div>
    </div>
  );
};

const EditorButton = ({ onMouseDown, Name }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="col-span-1">
      <button
        onMouseDown={(e) => {
          e.preventDefault();
          onMouseDown();
          setIsActive(!isActive);
        }}
        type="button"
        className="h-9 w-9 transition  active:bg-indigo-200 shadow hover:bg-indigo-100 bg-white text-gray-800 rounded"
      >
        {Name}
      </button>
    </div>
  );
};

export default EditorStyling;
