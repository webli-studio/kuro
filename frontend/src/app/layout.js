import { Epilogue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Epilogue({
  variable: "--font-site-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-site-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Kuro Sizzlers | Sizzlers, Continental & Multi-Cuisine",
  description:
    "Kuro Sizzlers brings Continental, Chinese and multi-cuisine flavours together with signature sizzling plates and crafted dishes.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}














