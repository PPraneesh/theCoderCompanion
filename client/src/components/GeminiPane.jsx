/* eslint-disable react/prop-types */
import React, { useState } from 'react';
export default function GeminiPane(props) {
  const pane = props.pane
  const [logicButton, setLogicButton] = useState(true)
  const handleGeminiHelp = (e) => {
    props.setTypeOfHelp(e.target.innerHTML)
    props.geminiHelp();
    setLogicButton(false)
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
      <button className="gemini-help-btn" onClick={handleGeminiHelp}>Need help with logic</button>
      <button className="gemini-help-btn" onClick={handleGeminiHelp} disabled={logicButton} title='Understand the logic!!'>Need help with code</button>
      <button className="gemini-help-btn" onClick={handleGeminiHelp} disabled={props.runOrSubmit === ""} title='First try on your own' >Need help with Efficiency</button>
    </div>
  );
}