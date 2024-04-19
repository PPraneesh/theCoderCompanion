export default function OutputPane(props) {
    const getOutput = (outputDetails) => {
        let statusId = outputDetails?.status?.id;
        const atobHandler = (str) => {
            try {
                return window.atob(str);
            } catch (error) {
                console.error("Failed to decode base64 string:", error);
                return "Error: Invalid base64 encoding";
            }
        };
        if (statusId === 6) {
            return (
                <pre>
                    {atobHandler(outputDetails?.compile_output)}
                </pre>
            );
        } else if (statusId === 3) {
            return (
                <pre>
                    {outputDetails.stdout !== null
                        ? atobHandler(outputDetails.stdout)
                        : null}
                </pre>
            );
        } else if (statusId === 5) {
            return (
                <pre>
                    Time Limit Exceeded
                </pre>
            );
        }else if(statusId === 4){
            return (
                <pre>
                    Wrong Answer
                </pre>
            );
        }else {
            return (
                <pre>
                    {atobHandler(outputDetails?.stderr)}
                </pre>
            );
        }
    };
    
    return (
        <div className="output-pane">
            <h2>Output</h2>
            <div className="output">
                {
                    props.processing ? (
                        <>
                        <h3>Processing...</h3>
                        <div className="loading">
                             <img src="/tube-spinner.svg" alt="loading" />
                        </div>
                        
                        </>
                    ) :

                    props.output ? (
                        getOutput(JSON.parse(props.output))
                    ) : (
                        <h3>{props.output}</h3>
                    )
                    }
            </div>
        </div>
    )
}

