import * as React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import Skills from "../pages/Skills";

describe("hello world test", () => {
  test("test", () => {
    expect(true).toBe(true);
  });
});

describe("Router", () => {
  test("home page should load", async () => {
    const { getByText } = render(<App />);
    await waitFor(() => {
      expect(getByText("comprehensive list of my skills.", { exact: false }).textContent).toMatch("comprehensive list of my skills.");
    });
  });

  test("project page should load from home page", async () => {
    const { getByText, queryByText } = render(<App />);
    await waitFor(() => {
      expect(getByText("comprehensive list of my skills.", { exact: false })).toBeInTheDocument();
    });

    fireEvent.click(getByText(/projects/i));
    await waitFor(() => {
      const absence = queryByText("comprehensive list of my skills.", { exact: false });
      expect(absence).toBeNull();
      expect(getByText("Here's a curated listing of Personal Projects that I've done.", { exact: false }).textContent)
        .toMatch("Here's a curated listing of Personal Projects that I've done.");
    });
  });

  test("about page should load", async () => {
    const { getByText, queryByText } = render(<App />);


    fireEvent.click(getByText(/about/i));
    await waitFor(() => {
      const expected = "Hello, my name is Robert and I am a web developer based in Vancouver, Canada.";
      const absence = queryByText("Here's a curated listing of Personal Projects that I've done.", { exact: false });
      expect(absence).toBeNull();
      expect(getByText(expected, { exact: false }).textContent).toMatch(expected);
    });
  });

  test("skills page should load on click", async () => {
    const { getByText, queryByText, } = render(<App />);

    fireEvent.click(getByText("Robert"));
    await waitFor(() => {
      const expected = "I am a web application developer (back-end and front-end) that primarily uses Javascript / Typescript and NodeJS in the Serverless/Functions/Lambda paradigm.";
      expect(getByText(expected, { exact: false }).textContent).toMatch(expected);
    });

    fireEvent.click(getByText(/here/i));

    await waitFor(() => {
      const expected = "Skills / Technologies I use.";
      const absence = queryByText("Hello, my name is Robert and I am a web developer based in Vancouver, Canada.", { exact: false });
      expect(absence).toBeNull();
      expect(getByText(expected, { exact: false }).textContent).toMatch(expected);
    });
  })
});
