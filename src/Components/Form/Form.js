import React, { Component } from "react";
import "./Form.css";
import indexData from "../../Search/IndexData";
import search from "../../Search/Search";
import Book from "../Book/Book";

const querySummary = indexData();

class Form extends Component {
  constructor(props) {
    super(props);
    this.bookResult = [];
    this.state = {
      searchInput: "",
      suggestions: [],
      result: [],
      resultIndex: 0,
    };
  }

  changeHandler = (e) => {
    var searchInput = e.target.value;
    let suggestions = [];
    let searchResult = [];
    if (searchInput.length > 0) {
      searchResult = search(searchInput, querySummary);
      for (var i = 0; i < searchResult.length; i++) {
        suggestions.push(searchResult[i][0]);
      }
    }
    this.setState({
      searchInput: e.target.value,
      suggestions: suggestions,
      result: searchResult,
    });
  };

  suggestionSelected(value, index) {
    this.setState(() => ({
      searchInput: value,
      suggestions: [],
      resultIndex: index,
    }));
  }

  renderSuggestions() {
    if (this.state.suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {this.state.suggestions.map((item, index) => (
          <li key={index} onClick={() => this.suggestionSelected(item, index)}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  onSubmitHandler = (e) => {
    if (this.state.result.length === 0) {
      return null;
    }
    e.preventDefault();

    this.setState({
      bookResult: this.bookResult.push(
        this.state.result[this.state.resultIndex]
      ),
    });
  };

  render() {
    return (
      <form className="Form">
        <React.Fragment>
          <h1>
            <span
              style={{
                color: "black",
                background: "#FFFFFF7F",
              }}
            >
              Search Books
            </span>
          </h1>
          <input
            data-testid="search-box"
            type="text"
            placeholder="Enter your search here"
            value={this.state.searchInput}
            onChange={(e) => this.changeHandler(e)}
          />
          <button
            data-testid="button"
            value="submit"
            onClick={(e) => this.onSubmitHandler(e)}
          >
            Submit
          </button>

          {this.renderSuggestions()}

          {this.bookResult &&
            this.bookResult.map((book, index) => (
              <div>
                <Book key={index} result={book} />
              </div>
            ))}
        </React.Fragment>
      </form>
    );
  }
}

export default Form;
