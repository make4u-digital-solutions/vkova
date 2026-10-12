import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "VKOVA - Find the Right Tutor in Lucknow | Home Tuition & Coaching",
  description:
    "VKOVA connects students with verified, compassionate home tutors across Lucknow and conducts rigorous, concept-focused coaching classes designed for academic breakthroughs.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="bg-background text-on-surface min-h-screen relative font-sans">
        {children}
      </body>
    </html>
  );
}
