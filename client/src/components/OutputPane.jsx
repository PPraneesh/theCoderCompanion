import atob from 'atob';

export default function OutputPane(props) {
    const output = null;
    try {
        output = JSON.parse(props.output);
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
    console.log()
  
    const getOutput = (outputDetails) => {
        let statusId = outputDetails?.status?.id;
    
        
        const decodeBase64 = (str) => {
            try {
                return window.atob(str);
            } catch (error) {
                console.error("Failed to decode base64 string:", error);
                return "Error: Invalid base64 encoding";
            }
        };
    
        if (statusId === 6) {
            return (
                <pre className="px-2 py-1 font-normal text-xs text-red-500">
                    {decodeBase64(outputDetails?.compile_output)}
                </pre>
            );
        } else if (statusId === 3) {
            return (
                <pre className="px-2 py-1 font-normal text-xs text-green-500">
                    {outputDetails.stdout !== null
                        ? decodeBase64(outputDetails.stdout)
                        : null}
                </pre>
            );
        } else if (statusId === 5) {
            return (
                <pre className="px-2 py-1 font-normal text-xs text-red-500">
                    Time Limit Exceeded
                </pre>
            );
        } else {
            return (
                <pre className="px-2 py-1 font-normal text-xs text-red-500">
                    {decodeBase64(outputDetails?.stderr)}
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
                        <h3>Processing...</h3>
                    ) :

                    props.output ? (
                        getOutput(output)
                    ) : (
                        <h3>{output}</h3>
                    )
                    }
                </div>
        </div>
    )
}

