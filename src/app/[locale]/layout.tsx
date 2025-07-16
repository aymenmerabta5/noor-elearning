import "@/styles/globals.css";

import { type Metadata } from "next";
import { Inter, Lora, JetBrains_Mono } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/react";
import { HydrateClient } from "@/trpc/server";
import { ThemeProvider } from "../../components/theme-provider";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Noor - Elearning",
  description: "Elearning platform for our brothers in gaza",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html
      lang={locale}
      className={`${inter.variable} ${lora.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <TRPCReactProvider>
          <HydrateClient>
            <NextIntlClientProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </NextIntlClientProvider>
          </HydrateClient>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
