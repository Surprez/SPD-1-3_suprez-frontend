import React, { Component } from "react";
import SpeechRecognition from "react-speech-recognition";

class Dictaphone extends Component {
  render() {
    const {
      transcript,
      resetTranscript,
      browserSupportsSpeechRecognition,
      startListening,
      stopListening
    } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div>
        <button onClick={startListening}>Start listening</button>
        <button onClick={stopListening}>Stop Listening</button>
        <button onClick={resetTranscript}>Reset</button>
        <span>{transcript}</span>
      </div>
    );
  }
}
const options = {
  autoStart: false
};
export default SpeechRecognition(options)(Dictaphone);
