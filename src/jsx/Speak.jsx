import React, { Component } from "react";
import SpeechRecognition from "react-speech-recognition";
import Axios from "axios";
// import { worker } from "cluster";

class Speak extends Component {
	constructor(props) {
		super(props);

		this.state = {
			transcript: null
		};
	}

	// when you end listening,
	// update state with final transcript
	// pass this function to the element that does this worker, via props

	// when you want to get the end of transcript
	// update state with that transcipt setState({transcript: transcript})

	render() {
		let
			{
				transcript,
				resetTranscript,
				browserSupportsSpeechRecognition,
				startListening,
				stopListening,
				finalTranscript
			} = this.props;

		if (!browserSupportsSpeechRecognition) {
			return null;
		}

		const scriptArray = transcript.split(' ')
		const myWord = scriptArray[scriptArray.length - 1]
		const prvWord = scriptArray[scriptArray.length - 2]
		let goAPI = false

		// warning! PLACEHOLDER must be replaced with user's list.
		const PLACEHOLDER = ['banana', 'bananas']
		const MAGICWORD = 'hello'

		if (myWord === MAGICWORD) {
			// this checks for the magic word
			console.log(prvWord)
			goAPI = prvWord
		} else {
			for (let keyWord of PLACEHOLDER) {
				if (myWord === keyWord) {
					// this checks for keywords
					console.log(keyWord)
					goAPI = keyWord
					break
				}
			}
		}

		if (goAPI) {
			Axios
				.get(`http://api.giphy.com/v1/gifs/search?q=:${goAPI}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=1`)
				.then(res => {
					console.log(res.data.data[0].embed_url);
					return <img id="speak_response" alt="giphy" src="{res}"></img>	
				})
		}

		console.log(myWord)

		return (
			<div className='placeholderButtonArray' >
				<button onClick={startListening}>Start listening</button>
				<button
					onClick={() => {
						// other code runs here
						this.setState({ transcript: finalTranscript });
						stopListening();
						console.log("final transcript is:", finalTranscript);
						console.log("the state is:", this.state.transcript);
					}}
				>Stop Listening</button>

				<button onClick={resetTranscript}>Reset</button>
			</div>
		);
	}
}

const options = {
	autoStart: false
};
export default SpeechRecognition(options)(Speak);
