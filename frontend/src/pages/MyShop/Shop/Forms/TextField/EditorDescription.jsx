import { Editor, convertToRaw, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useRef, useContext, useEffect } from "react";
import { EditorContext } from "../../../../../context/EditorContext";
import EditorStyling from "../EditorStyling";

const EditorDescription = ({ setFieldValue, setError }) => {
  const { editorState, setEditorState, alignmentType } =
    useContext(EditorContext);
  const textLength = editorState.getCurrentContent().getPlainText().length;
  const toRaw = convertToRaw(editorState.getCurrentContent());
  const fromRaw = convertFromRaw(toRaw);
  const maxLength = 3000;
  const onChange = (editorState) => {
    setEditorState(editorState);
    setFieldValue("description", toRaw);
    setError("");
  };

  const editor = useRef(null);

  const focusEditor = () => {
    editor.current.focus();
  };

  useEffect(() => {
    focusEditor();
  }, []);

  return (
    <div>
      <div className="border mt-2 rounded-xl">
        <EditorStyling onChange={onChange} editorState={editorState} />
        <div onClick={focusEditor} className="p-3">
          <Editor
            handleBeforeInput={(val) => {
              const textLength = editorState
                .getCurrentContent()
                .getPlainText().length;
              if (val && textLength >= maxLength) {
                return "handled";
              }
              return "not-handled";
            }}
            handlePastedText={(val) => {
              const textLength = editorState
                .getCurrentContent()
                .getPlainText().length;
              return val.length + textLength >= maxLength;
            }}
            ref={editor}
            editorState={editorState}
            textAlignment={alignmentType}
            onChange={onChange}
            placeholder="Write your product description here..."
          />
        </div>
        <div
          className={
            "py-1 px-2 text-sm text-end " +
            (textLength >= 3000 && "text-red-500")
          }
        >
          {textLength}/3000
        </div>
      </div>
    </div>
  );
};

export default EditorDescription;
