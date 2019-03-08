import React, { Component } from "react";
// Reference
// https://goshakkk.name/array-form-inputs/

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
    /* TODO: implement submit button!! */
    let myArray = [];
    for (let obj of this.state.keywords) {
      myArray.push(obj.name);
    }
    console.log("result:");
    console.log(myArray);
    return myArray;
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
        <h2>Keywords</h2>
        <div id="keywords">
          {this.state.keywords.map((keyword, idx) => (
            <div className="inputbar">
              <button
                type="button"
                onClick={this.handleRemoveShareholder(idx)}
                className="small"
              >
                &minus;
              </button>
              <input
                type="text"
                placeholder={`Keyword #${idx + 1}`}
                onInput={this.handleKeywordChange(idx)}
              />
            </div>
          ))}
        </div>
        <div className="inputbar">
          <button
            type="button"
            onClick={this.handleAddKeyword}
            className="small"
          >
            Add Keyword
          </button>
          <button type="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Keywords;
