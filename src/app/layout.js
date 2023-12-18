import { Dosis } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata = {
  title: "KUROSHI",
  description: "Web List Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dosis.className} bg-color-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
