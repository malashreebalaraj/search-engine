import indexData from "../IndexData";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

const actualValue = indexData();

test("check the no. of queries are mapped to keyword index", () => {
  const length = actualValue.length;
  expect(length).toBe(55);
});

test("check the book index values for `is your problems` query string", () => {
  expect(actualValue[0]).toBe("0,7,48,52");
});

test("check the book index values for `skills three better` query string", () => {
  expect(actualValue[54]).toBe(54);
});
