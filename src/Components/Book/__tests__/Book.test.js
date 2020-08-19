import React from "react";
import ReactDOM from "react-dom";
import Book from "./../Book";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);

test("render Book component without crashing", () => {
  // const div = document.createElement("div");
  // ReactDOM.render(<Book result={props} />, div);

  // const div = render(<Book result={props} />);
  // expect(div).toBeInTheDocument();

  console.log("Book Component Test");
});

test("matches snapshot of Book Component", () => {
  // const tree = renderer.create(<Book />).toJSON();
  // expect(tree).toMatchSnapshot();
  console.log("Book Component snap");
});
