import MatchMediaMock from "vitest-matchmedia-mock";
import { describe, test, afterAll, expect } from "vitest";
import { render } from "@testing-library/react";
import ModeToggle from "./ModeToggle";
import { NextIntlClientProvider } from "next-intl";

describe("Footer is good", () => {
  const matchMediaMock = new MatchMediaMock();

  afterAll(() => {
    matchMediaMock.clear();
  });

  test("matches immediately", () => {
    matchMediaMock.useMediaQuery("(prefers-color-scheme: dark)");
    const messages = {
      LanguageSwitcher: {
        "switch-to-english": "Switch to English",
        "switch-to-spanish": "Switch to Spanish",
      },
    };
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <ModeToggle />
      </NextIntlClientProvider>,
    );
    expect(<ModeToggle />).toBeTruthy();
  });
});
