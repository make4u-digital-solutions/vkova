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
  icons: {
    icon: "/vkova_logo.jpeg",
    shortcut: "/vkova_logo.jpeg",
    apple: "/vkova_logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/vkova_logo.jpeg" type="image/jpeg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-background text-on-surface min-h-screen relative font-sans">
        {children}
      </body>
    </html>
  );
}
