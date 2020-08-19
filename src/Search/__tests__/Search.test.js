import indexData from "../IndexData";
import search from "./../Search";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

test("search for a word match from query", () => {
  const result = search("achieve", indexData());
  expect(result[0][0]).toBe("The Richest Man in Babylon");
});

test("search for partial word from query", () => {
  const result = search("achi", indexData());
  expect(result[0][0]).toBe("The Richest Man in Babylon");
});

test("search for `and` word from query to check for duplicates", () => {
  const result = search("and", indexData());
  var flag = false;
  for (var i = 0; i < result.length; i++) {
    for (var j = i + 1; j < result.length; j++) {
      if (result[i][0] === result[j][0]) {
        flag = true;
      }
    }
  }
  expect(flag).toBeFalsy();
});

test("search result length to be 3 for query with more than 3 results", () => {
  const result = search("is your problems", indexData());
  expect(result.length).toBe(3);
});

test("search for UPPERCASE word from the query", () => {
  const result = search("your think thoughts ", indexData());
  expect(result[0][0]).toBe("Incognito");
});
