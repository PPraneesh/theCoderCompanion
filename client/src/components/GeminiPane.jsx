export default function GeminiPane(props) {
  const pane = props.pane

  return (
    <div className={ pane ? "gemini-pane active" : "gemini-pane" }>
      <h1>Gemini</h1>
      <p>Get help with your code</p>
      <br/>
      <md-block>
        {props.geminiResponse}
      </md-block>
      <button className="gemini-help-btn" onClick={props.geminiHelp}>Get help</button>
    </div>
  );
}