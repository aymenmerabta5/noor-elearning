import MatchMediaMock from "vitest-matchmedia-mock";
import { describe, test, afterAll, expect } from "vitest";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer is good", () => {
  const matchMediaMock = new MatchMediaMock();

  afterAll(() => {
    matchMediaMock.clear();
  });

  test("matches immediately", () => {
    matchMediaMock.useMediaQuery("(prefers-color-scheme: dark)");
    render(<Footer />);
    expect(<Footer />).toBeTruthy();
  });
});
