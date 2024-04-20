import EditorPane from "./EditorPane"
import ProblemPane from "./ProblemPane"
import OutputPane from "./OutputPane"
import InputPane from "./InputPane"
import GeminiPane from "./GeminiPane"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { urlContext } from "../urlContext";


export default function ProblemPage() {
    const { url } = useContext(urlContext)
    const options = [
        { value: 'C++', label: 'C++', id: 54 },
        { value: 'javascript', label: 'javascript', id: 63 },
        { value: 'Java', label: 'Java', id: 62 }
    ]
    let [jsCode, setJsCode] = useState("//your code goes here\nconsole.log('Hello World')");
    let [javaCode, setJavaCode] = useState("class Main{\n\tpublic static void main(String[] args){\n\t\t//your code goes here\n\n\t}\n}");
    let [cppCode, setCppCode] = useState("#include<bits/stdc++.h>\nusing namespace std;\n\nint main(){\n\t//your code goes here\n\n\treturn 0;\n}");
    let [langOption, setLangOption] = useState(options[0])
    let [processing, setProcessing] = useState(false)
    let [geminiCall, setGeminiCall] = useState(false)
    let [output, setOutput] = useState("")
    const [input, setInput] = useState("")

    const [geminiPane, setGeminiPane] = useState(false)

    const { id } = useParams();
    const [problem, setProblem] = useState({});
    const [geminiResponse,setGeminiResponse]= useState("")
    useEffect(() => {
        if (id) {
            axios.get(`${url}problems/${id}`)
                .then((res) => {
                    setProblem(res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [id])

    const handleLangChange = (langOption) => {
        setLangOption(langOption)
    }
    const handleCodeChange = (value) => {
        langOption.value === "javascript" && setJsCode(value)
        langOption.value === "Java" && setJavaCode(value)
        langOption.value === "C++" && setCppCode(value)
    }
    const handleProcessing = () => {
        if (processing === false) {
            setProcessing(true)
            axios.post(`${url}submit`, {
                lang: langOption.id,
                code: langOption.value === "javascript" ? jsCode : langOption.value === "Java" ? javaCode : cppCode,
                customInput: input
            })
                .then(res => {
                    setProcessing(false)
                    setOutput(JSON.stringify(res.data))
                })
                .catch(err => {
                    console.log(err)
                    setProcessing(false)
                    setOutput("Error")
                })
        }
    }
    const geminiHelp = ()=>{
        setGeminiCall(true)
        let code = langOption.value === "javascript" ? jsCode : langOption.value === "Java" ? javaCode : cppCode
      axios.post(url+'genai',{
        prompt:"See this problem statement and tell what's wrong with given code and dont give corrected code, let me learn, just give few hints or points so that i can understand how to get that logic of question\n"+problem.description+"\n"+code
      })
      .then(res=>{
        setGeminiCall(false)
        setGeminiResponse(res.data)
      })
    }
    
    return (
        <div className="root-div">
            <div className="header-div">
                <div className="buttons-header">

                    <button onClick={handleProcessing} className="run-btn" >Run</button>
                    <button onClick={handleProcessing} className="submit-btn">Submit</button>
                </div>
                <button onClick={()=>setGeminiPane(!geminiPane)} className="run-btn gemini-btn">Get help with Gemini</button>
            </div>
            <div className="content">


                <PanelGroup autoSaveId="example" direction="horizontal">
                    <Panel defaultSize={45} minSize={20}>
                        <ProblemPane problem={problem} />
                    </Panel>
                    <PanelResizeHandle className="resize-handle" />
                    <Panel minSize={20} defaultSize={55}>
                        <PanelGroup autoSaveId="example" direction="vertical">
                            <Panel defaultSize={50} className="editor-pane">
                                <EditorPane langOption={langOption}
                                    options={options}
                                    jsCode={jsCode}
                                    javaCode={javaCode}
                                    cppCode={cppCode}
                                    handleLangChange={handleLangChange}
                                    handleCodeChange={handleCodeChange}
                                />
                            </Panel>
                            <PanelResizeHandle className="resize-handlev" />
                            <Panel minSize={7} defaultSize={35} maxSize={90}>
                                <div className="stats-pane">
                                    <h3>Testcases</h3>
                                    <PanelGroup autoSaveId="example" direction="horizontal" >
                                        <Panel defaultSize={50} className="input-pane">
                                            <InputPane input={problem.input} setInput={setInput} />
                                        </Panel>
                                        <hr />
                                        <Panel defaultSize={50} className="output-pane">
                                            <OutputPane processing={processing} output={output} />
                                        </Panel>
                                    </PanelGroup>
                                </div>
                            </Panel>
                        </PanelGroup>

                    </Panel>

                </PanelGroup>;
            </div>
            
            <GeminiPane geminiCall={geminiCall} pane={geminiPane} geminiResponse={geminiResponse} geminiHelp={geminiHelp}/>
            
        </div>
    );
}
