import React from "react";
import "./Book.css";

const book = (props) => {
  return (
    <React.Fragment>
      <div className="Book">
        <h3 data-testid="title">{props.result[0]}</h3>
        <p data-testid="summary">{props.result[1].substr(0, 150)}...</p>
        <hr></hr>
        <label data-testid="author">{props.result[2]}</label>
      </div>
    </React.Fragment>
  );
};

export default book;
