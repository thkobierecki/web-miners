import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web3Miners",
  description:
    "Innovative Web3 Educational Platform that will help millions of users onboard to Web3 world and beyond.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WF9MWK4E8F"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WF9MWK4E8F');
        `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
