import React, { Component } from "react";
import SpeechRecognition from "react-speech-recognition";
import Axios from "axios";
// import { worker } from "cluster";

class Speak extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
			transcript: null,
			word: null,
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
		const PLACEHOLDER = ['banana', 'bananas', 'amazing', 'fireworks', 'surprise', 'questions', 'question', 'spark']
		const MAGICWORD = 'search'

		if (myWord !== this.state.word && myWord !== prvWord) {
			console.log(myWord)
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
		}

		if (goAPI) {
			Axios
				.get(`http://api.giphy.com/v1/gifs/search?q=:${goAPI}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=1`)
				.then(res => {
					console.log(res)
					console.log(res.data.data[0].images.original.url)
					this.setState({ link: res.data.data[0].images.original.url, word: goAPI })
					// console.log(res.data.data[0].embed_url);
				})
		}

		return (
			<div className='placeholderButtonArray' >
				<div className='gifbox'>
					<img alt='speak_response' src={this.state.link} id='gif' />
				</div>
				<button onClick={startListening}>Start Listening</button>
				<button
					onClick={() => {
						// other code runs here
						this.setState({ transcript: finalTranscript });
						stopListening();
						resetTranscript();
						console.log("final transcript is:", finalTranscript);
						console.log("the state is:", this.state.transcript);
					}}
				>Stop Listening</button>
				<button
					onClick={() => {
						alert('These popups will show a quick tutorial of the app.')
						alert('BASIC FEATURES:\n1. Press Start Listening button to enable mic.\n2. Speak into the microphone while you are presenting.\n3. Say the "magic word", {magicWord}, to search the previously spoken word through the giphy engine.')
						alert('You will gain access to more features while you are logged in.')
						alert('LOGGED IN FEATURES:\n1. While you are logged in, you can access the keywords page.\n2. On this page, you can enter your own unique search terms, or "key words", for the presentation.\n3. When you say any of these words during the presentation, they will search in giphy without using the "magic word", keeping the flow of your presentation steady.')
					}}>Instructions</button>
				{/* <button onClick={resetTranscript}>Reset</button> */}
			</div>
		);
	}
}

const options = {
	autoStart: false
};
export default SpeechRecognition(options)(Speak);
