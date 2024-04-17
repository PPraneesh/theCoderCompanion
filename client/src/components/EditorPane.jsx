import Editor from '@monaco-editor/react';
import { useState, useEffect } from 'react';
import Select from 'react-select'

function EditorPane() {
  let [code, setCode] = useState("// some comment");
  const options = [
    { value: 'C++', label: 'C++' },
    { value: 'javascript', label: 'javascript' },
    { value: 'Java', label: 'Java' }
  ]
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  }
  const [selectedOption, setSelectedOption] = useState(options[0])
  
  console.log(selectedOption);
  return (
    <>
    <Select options={options} onChange={handleChange} />
  <Editor height="90vh" defaultLanguage={selectedOption} defaultValue={code} />
      </>
);
}



export default EditorPane;
