import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joseph Scott's Portfolio",
  description:
    "Information about Joseph Scott professional experience and ways of contacting him",
};

export const viewport: Viewport = {
  viewportFit: "cover",
  width: "device-width",
  minimumScale: 1,
  maximumScale: 1,
};

const RootLayout: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
