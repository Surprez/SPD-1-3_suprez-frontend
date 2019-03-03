// Reference
// https://goshakkk.name/array-form-inputs/

import React, { Component } from 'react';

class Keywords extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			keywords: [{ name: "" }]
		};
	}

	handleNameChange = evt => {
		this.setState({ name: evt.target.value });
	};

	handleKeywordChange = idx => evt => {
		const newKeywords = this.state.keywords.map((keyword, sidx) => {
			if (idx !== sidx) return keyword;
			return { ...keyword, name: evt.target.value };
		});

		this.setState({ keywords: newKeywords });
	};

	handleSubmit = evt => {
		//	 TODO
	};

	handleAddKeyword = () => {
		this.setState({
			keywords: this.state.keywords.concat([{ name: "" }])
		});
	};

	handleRemoveShareholder = idx => () => {
		this.setState({
			keywords: this.state.keywords.filter((s, sidx) => idx !== sidx)
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="Presentation Name"
					value={this.state.name}
					onChange={this.handleNameChange}
				/>

				<h2>Keywords</h2>

				{this.state.keywords.map((keyword, idx) => (
					<div className="keyword">
						<input
							type="text"
							placeholder={`Keyword #${idx + 1}`}
							value={keyword.name}
							onChange={this.handleKeywordChange(idx)}
						/>
						<button
							type="button"
							onClick={this.handleRemoveShareholder(idx)}
							className="small"
						>
							-
						</button>
					</div>
				))}
				<button
					type="button"
					onClick={this.handleAddKeyword}
					className="small"
				>
					Add Keyword
				</button>
				<button>Submit</button>
			</form>
		);
	}
}

export default Keywords
