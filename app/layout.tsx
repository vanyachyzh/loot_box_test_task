import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "./providers/ReduxProvider";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Interactive Loot Box Component",
  description:
    "Interactive loot box component similar in spirit to those found on platforms like csgo-skins.com.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer
          position="bottom-right"
          theme="dark"
          closeButton={false}
        />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
