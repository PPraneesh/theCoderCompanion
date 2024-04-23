/* eslint-disable react/prop-types */
export default function GeminiPane(props) {
  const pane = props.pane
  const handleGeminiHelp = (e) => {
    props.setTypeOfHelp(e.target.innerHTML)
    props.geminiHelp();
  }
  return (
    <div className={ pane ? "gemini-pane active" : "gemini-pane" }>
      <h1>Gemini</h1>
      <p>Get help with your code</p>
      <br/>
      <md-block>
        {props.geminiResponse}
      </md-block>
      {props.geminiCall === true && (<div className="loading">
                             <img src="/tube-spinner.svg" alt="loading" />
                        </div>)}
      <button className="gemini-help-btn" onClick={handleGeminiHelp}>Need help with code</button>
      <button className="gemini-help-btn" onClick={handleGeminiHelp}>Need help with logic</button>
    </div>
  );
}