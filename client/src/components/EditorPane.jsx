import Editor from '@monaco-editor/react';
import Select from 'react-select'

function EditorPane(props) {

  
  return (
    <>
      <Select options={props.options} onChange={props.handleLangChange} />
      {props.langOption.value === "javascript" && <Editor height="90vh" theme="vs-dark" defaultLanguage="javascript" defaultValue={props.jsCode}  onChange={props.handleCodeChange} />}
      {props.langOption.value === "Java" && <Editor height="90vh"  theme="vs-dark"defaultLanguage="java" defaultValue={props.javaCode} onChange={props.handleCodeChange} />}
      {props.langOption.value === "C++" && <Editor height="90vh" theme="vs-dark" defaultLanguage="cpp" defaultValue={props.cppCode} onChange={props.handleCodeChange} />}
    </>
  );
}



export default EditorPane;
