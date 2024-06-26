import "@mantine/core/styles.css";
// import "@/app/main.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import Providers from "@/utils/provider";
import { HeaderSearch } from "@/components/HeaderSearch";
import { FooterLinks } from "@/components/FooterLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <HeaderSearch />
          <Providers>{children}</Providers>
          <FooterLinks />
        </MantineProvider>
      </body>
    </html>
  );
}
