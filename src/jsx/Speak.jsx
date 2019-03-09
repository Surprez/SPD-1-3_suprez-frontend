import React, { Component } from "react";
import SpeechRecognition from "react-speech-recognition";
import Axios from "axios";

class Speak extends Component {
	constructor(props) {
		super(props);

		this.prvWord = '' // previous spoken word
		this.getWord = '' // most current spoken word
		this.APIWord = '' // word to search in API
		this.magicWord = 'search' // speak magic word to search

		this.state = {
			giphyURL: '',
		}
	}

	matchWord = () => {
		const { keywords } = this.props

		// ensure that this.getWord hasn't been used already
		if (this.getWord !== this.APIWord &&
			this.getWord !== this.prvWord) {

			// this checks for the "magic word"
			if (this.getWord === this.magicWord &&
				this.prvWord !== this.magicWord) {
				this.APIWord = this.prvWord

			} else {
				for (let keyword of keywords) {

					// this checks for any "keywords"
					if (this.getWord === keyword) {
						this.APIWord = keyword
						break
					}
				}
			}
		}
	}

	setWords = () => {
		console.log(this.state)
		const { transcript } = this.props
		console.log(transcript) // undefined?
		const scriptArray = transcript.split(' ')
		console.log(scriptArray)
		this.getWord = scriptArray[scriptArray.length - 1]
		this.prvWord = scriptArray[scriptArray.length - 2]
		console.log(this.getWord, this.prvWord)
	}

	setURL = () => {
		if (this.APIWord) {
			Axios
				.get(`http://api.giphy.com/v1/gifs/search?q=:${this.APIWord}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=1`)
				.then(res => {
					this.setState({
						giphyURL: res.data.data[0].images.original.url
					})
					this.APIWord = ''
					this.getWord = ''
					this.prvWord = ''
				})
		}
	}

	handeInstructions = () => {

	}
	// when you end listening,
	// update state with final transcript
	// pass this function to the element that does this worker, via props
	// when you want to get the end of transcript
	// update state with that transcipt setState({transcript: transcript})
	render() {
		const {
			browserSupportsSpeechRecognition,
			startListening,
			stopListening,
			resetTranscript,
			finalTranscript,
		} = this.props;

		const { transcript } = this.state;

		console.log('got here?')
		console.log(transcript)

		const {
			giphyURL,
		} = this.state;

		if (!browserSupportsSpeechRecognition) {
			return null;
		}

		this.matchWord()
		this.setWords()
		this.setURL()

		console.log(this.getWord)

		return (
			<div className='placeholderButtonArray' >
				<div className='gifbox'>
					<img alt='speak_response' src={giphyURL} id='gif' />
				</div>

				<button onClick={startListening}>Start Listening</button>

				<button
					onClick={() => {
						// other code runs here
						this.setState({ transcript: finalTranscript });
						resetTranscript();
						stopListening();
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

export default SpeechRecognition({ autoStart: false })(Speak);
