import "@mantine/core/styles.css";
import "@/app/main.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";
import "aos/dist/aos.css";
// import "@mantine/dropzone/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import Providers from "@/utils/provider";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

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
          <ModalsProvider labels={{ confirm: "Submit", cancel: "Cancel" }}>
            <Notifications />
            <Providers>{children}</Providers>
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
