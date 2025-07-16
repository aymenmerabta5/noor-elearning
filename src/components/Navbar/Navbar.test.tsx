import { describe, test, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import { NextIntlClientProvider } from "next-intl";
import Link from "next/link";

vi.mock(
  "next/navigation",
  async (importOriginal: () => Promise<unknown>): Promise<object> => {
    const actual = (await importOriginal()) as Record<string, unknown>;

    return {
      ...actual,
      useRouter: vi.fn(() => ({
        push: vi.fn(),
        replace: vi.fn(),
        reload: vi.fn(),
        back: vi.fn(),
        prefetch: vi.fn(),
      })),
      usePathname: vi.fn(() => "/"),
      useSearchParams: vi.fn(() => new URLSearchParams()),
    };
  },
);

describe("LanguageSwitcher", () => {
  test("renders without crashing", () => {
    const messages = {
      LanguageSwitcher: {
        "switch-to-english": "Switch to English",
        "switch-to-spanish": "Switch to Spanish",
      },
    };

    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <Navbar />
      </NextIntlClientProvider>,
    );
    expect(<Link href={"/"} />).toBeTruthy();
  });
});
