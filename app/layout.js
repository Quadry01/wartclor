import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wartclor UNILAG",
  description:
    "The West African Regional Research and Training Center on Low Vision and Rehabilitation (WARTCLOR) at UNILAG is established to reduce the burden of Low Vision at both National and Regional levels",
    
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
