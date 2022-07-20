import { Editor, ContentState, EditorState, convertFromHTML } from "draft-js";
import { useRef, useState, useContext, createContext } from "react";
import draftToHtml from "draftjs-to-html";

import { AddProductContext } from "./AddProductContext";

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const { formData, setFormData, setStep } = useContext(AddProductContext);
  const content = ContentState.createFromBlockArray(
    convertFromHTML(draftToHtml(formData?.description || ""))
  );

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(content)
  );
  const [alignmentType, setAlignmentType] = useState("");

  const values = {
    editorState,
    setEditorState,
    alignmentType,
    setAlignmentType,
  };
  return (
    <EditorContext.Provider value={values}>{children}</EditorContext.Provider>
  );
};
