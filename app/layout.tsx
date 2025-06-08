import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";

// Initialize Inter front with custom CSS variable and Latin subset
const inter = Inter({
  variable: "--font-inter",  // Define the CSS variable to apply the font
  subsets: ["latin"], // Load the Latin subset for the font
});


// Metadata definition for the page
export const metadata: Metadata = {
  title: "Gary's Portfolio",  // Page title
  description: "Modern and sleek profile site",  // Page description
};

/**
 * RootLayout Component
 *
 * This component serves as the root layout for the entire application. It wraps the children content
 * inside an HTML structure and includes global styles, font application, and theme handling
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      // Root HTML structure
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}>
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >
          {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
