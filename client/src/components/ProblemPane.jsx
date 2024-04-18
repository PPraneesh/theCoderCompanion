export default function ProblemPane(props) {

    const problem = props.problem;
    return (
        <div className="problem-pane">
            {
                problem &&
                <div>
                    <h1>{problem.name}</h1>
                    <h3>Description</h3>
                    <p>{problem.description}</p>
                    <h3>Input format</h3>
                    <p>{problem.inputformat}</p>
                    <br />
                    <h3>Output format</h3>
                    <p>{problem.outputformat}</p>
                    <h3>Constraints</h3>
                    <p>{problem.constraints}</p>
                    <h3>Sample Input</h3>
                    <code>{problem.input}</code>
                    <br />
                    <h3>Sample Output</h3>
                    <code>{problem.output}</code>
                    <h3>Explanation</h3>
                    <p>{problem.explanation}</p>
                </div>
                || <p>Loading...</p>
            }
        </div>
    );
}