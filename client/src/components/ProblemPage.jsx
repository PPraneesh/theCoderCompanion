import EditorPane from "./EditorPane"
import ProblemPane from "./ProblemPane"
import OutputPane from "./OutputPane"
import InputPane from "./InputPane"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function ProblemPage() {
    const options = [
        { value: 'C++', label: 'C++', id: 54 },
        { value: 'javascript', label: 'javascript' , id:63 },
        { value: 'Java', label: 'Java',id: 62}
    ]
    let [jsCode, setJsCode] = useState("// some comment");
    let [javaCode, setJavaCode] = useState("// some comment");
    let [cppCode, setCppCode] = useState("// some comment");
    let [langOption, setLangOption] = useState(options[0])
    let [processing,setProcessing] = useState(false)
    let [output,setOutput] = useState("")
    const [input, setInput] = useState("")
    
    const { id } = useParams();
    const [problem, setProblem] = useState({});
    useEffect(()=>{
        if (id) {
            axios.get(`https://animated-space-waddle-w6pjj6g7j7w2v994-3000.app.github.dev/problems/${id}`)
            .then((res)=>{
                setProblem(res.data);
            })
            .catch(err=>{
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
    const handleProcessing = ()=>{
        if(processing === false){
            setProcessing(true)
            axios.post("https://animated-space-waddle-w6pjj6g7j7w2v994-3000.app.github.dev/submit",{
                lang: langOption.id,
                code: langOption.value === "javascript" ? jsCode : langOption.value === "Java" ? javaCode : cppCode,
                customInput: input
            })
            .then(res=>{
                console.log("hehehehheeh ", JSON.stringify(res.data))
                setProcessing(false)
                setOutput(JSON.stringify(res.data)) // Convert res.data to a string
            })
            .catch(err=>{
                console.log(err)
                setProcessing(false)
                setOutput("Error")
            })
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleProcessing} >run</button>
                <button onClick={handleProcessing}>submit</button>
            </div>
            <PanelGroup autoSaveId="example" direction="horizontal">
                <Panel defaultSize={25} >
                    <ProblemPane problem={problem} />
                </Panel>
                <PanelResizeHandle />
                <Panel>
                    <PanelGroup autoSaveId="example" direction="vertical">
                        <Panel defaultSize={50}>
                            <EditorPane langOption={langOption}
                                options={options}
                                jsCode={jsCode}
                                javaCode={javaCode} 
                                cppCode={cppCode}
                                handleLangChange={handleLangChange}
                                handleCodeChange={handleCodeChange}
                                />
                        </Panel>
                        <PanelResizeHandle />
                        <Panel>
                            <PanelGroup autoSaveId="example" direction="horizontal">
                                <Panel defaultSize={50}>
                                    <InputPane input={problem.input} setInput={setInput}/>
                                </Panel>
                                <PanelResizeHandle />
                                <Panel>
                                    <OutputPane processing={processing} output={output}/>
                                </Panel>
                            </PanelGroup>
                        </Panel>
                    </PanelGroup>

                </Panel>
                <PanelResizeHandle />

            </PanelGroup>;
        </div>
    );
}
