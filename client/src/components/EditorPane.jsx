import Editor from "@monaco-editor/react";
import Select from "react-select";

function EditorPane(props) {
  return (
    <>
      <div className="editor-lang">
        <h2>Language :</h2>
        <Select
          className="lang-dropdown"
          options={props.options}
          onChange={props.handleLangChange}
          defaultValue={{ value: "C++", label: "C++", id: 54 }}
        />
      </div>
      {props.langOption.value === "javascript" && (
        <Editor
          height="90vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue={props.jsCode}
          onChange={props.handleCodeChange}
        />
      )}
      {props.langOption.value === "Java" && (
        <Editor
          height="90vh"
          theme="vs-dark"
          defaultLanguage="java"
          defaultValue={props.javaCode}
          onChange={props.handleCodeChange}
        />
      )}
      {props.langOption.value === "C++" && (
        <Editor
          height="90vh"
          theme="vs-dark"
          defaultLanguage="cpp"
          defaultValue={props.cppCode}
          onChange={props.handleCodeChange}
        />
      )}
    </>
  );
}

export default EditorPane;
