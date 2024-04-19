export default function GeminiPane(props) {

  const pane = props.pane

  return (
    <div className={ pane ? "gemini-pane active" : "gemini-pane" }>
      <h1>Gemini</h1>
      <p>Get help with your code</p>
    </div>
  );
}