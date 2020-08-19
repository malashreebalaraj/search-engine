import React from "react";
import ReactDOM from "react-dom";
import Form from "./../Form";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);

test("renders Form component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Form />, div);
});

test("renders search books header text", () => {
  const { getByText } = render(<Form />);
  const textElement = getByText(/search books/i);
  expect(textElement).toBeInTheDocument();
});

test("renders search input box", () => {
  const { getByTestId } = render(<Form />);
  const searchElement = getByTestId("search-box");
  expect(searchElement).toBeInTheDocument();
});

test("renders placeholder text in search input box", () => {
  const { getByPlaceholderText } = render(<Form />);
  const textElement = getByPlaceholderText(/enter your search here/i);
  expect(textElement).toBeInTheDocument();
  //   expect(textElement).toHaveTextContent(/enter your search here/i);
});

test("renders submit button", () => {
  const { getByTestId } = render(<Form />);
  const buttonElement = getByTestId("button");
  expect(buttonElement).toBeInTheDocument();
});

test("check button label text is Submit", () => {
  const { getByTestId } = render(<Form />);
  const buttonElement = getByTestId("button");
  expect(buttonElement).toHaveTextContent("Submit");
});

test("matches snapshot of Form component", () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});
