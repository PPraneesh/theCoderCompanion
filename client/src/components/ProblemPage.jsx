import EditorPane from "./EditorPane"
import ProblemPane from "./ProblemPane"

export default function ProblemPage() {

    return (
        <div>
        <h1>Problem</h1>
        <EditorPane language={selectedOption.value} />
        <ProblemPane />
        </div>
    );
}
