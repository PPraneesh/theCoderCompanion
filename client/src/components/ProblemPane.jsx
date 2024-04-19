export default function ProblemPane(props) {

    const problem = props.problem;
    return (
        <div className="problem-pane">
            {
                problem &&
                <div className="problem">
                    <h1>{problem.name}</h1>
                    <br />
                    <br />
                    <h3>Description</h3>
                    <p>{problem.description}</p>
                    <br />
                    <h3>Input format</h3>
                    <p>{problem.inputformat}</p>
                    <br />
                    <h3>Output format</h3>
                    <p>{problem.outputformat}</p>
                    <br />
                    <h3>Constraints</h3>
                    <p>{problem.constraint}</p>
                    <br />
                    <br />
                    <h3>Sample Input</h3>
                    <code>{problem.input}</code>
                    <br />
                    <br />
                    <h3>Sample Output</h3>
                    <code>{problem.output}</code>
                    <br />
                    <br />
                    <h3>Explanation</h3>
                    <p>{problem.explanation}</p>
                </div>
                || <p>Loading...</p>
            }
        </div>
    );
}