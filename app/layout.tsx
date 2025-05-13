import "./globals.css";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TransitionLayout from "@/components/TransitionLayout";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mahmoud Bahaa | Software Developer Portfolio",
  description: "Professional portfolio showcasing software development skills of Mahmoud Bahaa",
  openGraph: {
    title: "Mahmoud Bahaa | Software Developer Portfolio",
    description: "Professional portfolio showcasing software development skills of Mahmoud Bahaa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${manrope.variable}`}>
      <body className="flex flex-col min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <TransitionLayout>{children}</TransitionLayout>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}