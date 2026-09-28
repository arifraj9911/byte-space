import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace - Get Access to Hundreds Courses Available",
  description: "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses on ByteSpace.",
  keywords: ["online courses", "ByteSpace", "learning", "Figma", "UI/UX", "development", "creators"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground antialiased selection:bg-accent selection:text-secondary">
        {children}
      </body>
    </html>
  );
}
