import React, { Component } from "react";
import SpeechRecognition from "react-speech-recognition";
// import { worker } from "cluster";

class Dictaphone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transcript: null
    };
  }

  // when you end listening,
  // update state with final transcript
  // pass this function to the element that does this worker, via props
  //   }

  // when you want to get the end of transcript
  // update state with that transcipt setState({transcript: transcript})

  render() {
    const {
      //   transcript,
      resetTranscript,
      browserSupportsSpeechRecognition,
      startListening,
      stopListening,
      finalTranscript
    } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }
    console.log("the state is:", this.state.transcript);

    return (
      <div>
        <button onClick={startListening}>Start listening</button>
        <button
          onClick={() => {
            // other code runs here
            this.setState({ transcript: finalTranscript });

            stopListening();

            console.log("final transcript is:", finalTranscript);
            console.log("the state is:", this.state.transcript);
          }}
        >
          Stop Listening
        </button>

        <button onClick={resetTranscript}>Reset</button>
      </div>
    );
  }
}

const options = {
  autoStart: false
};
export default SpeechRecognition(options)(Dictaphone);
