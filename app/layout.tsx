import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auto Upvoter Detector – Detect Suspicious Voting Patterns",
  description: "API service that analyzes voting patterns to detect bots, manipulation, and fake engagement on social platforms."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c1457018-0520-490a-88fb-732ac6c9d884"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
