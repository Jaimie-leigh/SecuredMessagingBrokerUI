import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import renderer from "react-test-renderer";
import LogIn from "./LogIn";
import TestUtils from "react-dom/test-utils";

let container = null;

beforeEach(() => {
  // set a DOM elemant as render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // clean up on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Log in snapshot test", () => {
  test("test renders as per snapshot", () => {
    const tree = renderer.create(<LogIn></LogIn>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
